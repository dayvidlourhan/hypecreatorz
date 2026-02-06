import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface HypeQualifierProps {
    isOpen: boolean;
    onClose: () => void;
}

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const WEBHOOK_URL = 'https://webhook.bflabs.com.br/webhook/novo-lead-lp-hype';

const HypeQualifier: React.FC<HypeQualifierProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        instagram: '',
        tiktok: ''
    });

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitting(false);
            setFormData({
                name: '',
                phone: '',
                instagram: '',
                tiktok: ''
            });
        }
    }, [isOpen]);

    // ----------------------------------------------------------------------
    // PART 2A: TRACKING LOGIC (UTM & PARAMS)
    // ----------------------------------------------------------------------
    const getTrackingData = () => {
        const urlParams = new URLSearchParams(window.location.search);

        // Mapeamento de UTMs para os nomes sugeridos
        const utmMap: { [key: string]: string } = {
            utm_source: 'source',
            utm_campaign: 'origin',
            utm_medium: 'medium',
            utm_content: 'content',
            utm_term: 'term'
        };

        const tracking: any = {
            source: '',
            origin: '',
            medium: '',
            content: '',
            term: ''
        };

        const otherParams: any = {};

        // 1. Extrair todos os parâmetros da URL
        urlParams.forEach((value, key) => {
            if (utmMap[key]) {
                tracking[utmMap[key]] = value;
            } else {
                otherParams[key] = value;
            }
        });

        // 2. Lógica de Fallback / Autocomplete
        const trackingValues = Object.values(tracking);
        const filledCount = trackingValues.filter(v => v !== '').length;

        if (filledCount === 0) {
            // Caso todos os 5 campos venham vazios: Autocomplete com Demanda Direta
            tracking.source = "Demanda Direta";
            tracking.medium = "Demanda Direta";
            tracking.origin = "Demanda Direta";
            tracking.content = "Demanda Direta";
            tracking.term = "Demanda Direta";
        } else if (filledCount < 5) {
            // Se houver menos de 5 preenchidos, enviar os campos vazios preenchidos com origin ou source
            const fallbackValue = tracking.source || tracking.origin || tracking.medium || "Demanda Direta";
            Object.keys(tracking).forEach(key => {
                if (!tracking[key]) {
                    tracking[key] = fallbackValue;
                }
            });
        }

        return {
            ...tracking,
            trk_parameters: JSON.stringify(otherParams)
        };
    };

    // ----------------------------------------------------------------------
    // PHONE MASK LOGIC
    // ----------------------------------------------------------------------
    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length <= 2) return digits;
        if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        if (digits.length <= 11) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        }
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        if (formatted.length <= 15) {
            setFormData({ ...formData, phone: formatted });
        }
    };

    // ----------------------------------------------------------------------
    // PART 2B: SUBMISSION & WEBHOOK
    // ----------------------------------------------------------------------
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const trackingData = getTrackingData();
        const payload = {
            ...formData,
            ...trackingData,
            timestamp: new Date().toISOString(),
            url: window.location.href
        };

        // Fire and forget (or at least don't block the redirect)
        try {
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).catch(err => console.error("Webhook Error:", err));
        } catch (error) {
            console.error("Submission Error:", error);
        }

        // Redirect after fake loading delay
        setTimeout(() => {
            onClose();
            navigate('/obrigado', { state: { name: formData.name } });
        }, 2200);
    };

    if (!isOpen) return null;

    const isFormValid = formData.name && formData.phone.length >= 14 && formData.instagram;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Container */}
                <motion.div
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    className="relative max-w-lg w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_#CCFF00] p-8 md:p-12 overflow-hidden"
                >
                    {/* Part 4: Close Button - Square treatments */}
                    {!isSubmitting && (
                        <div
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 border-2 border-black flex items-center justify-center transition-colors bg-white z-10 cursor-pointer hover:bg-black hover:text-white group"
                        >
                            <X size={20} strokeWidth={3} />
                        </div>
                    )}

                    {isSubmitting ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-16 md:py-24 flex flex-col items-center justify-center gap-8"
                        >
                            <div className="w-full space-y-4 text-center">
                                <h3 className="font-archivo text-2xl uppercase font-black italic tracking-tighter">
                                    ANALISANDO PERFIL...
                                </h3>
                                {/* Part 3: Progress Bar Loader (Option B) */}
                                <div className="w-full bg-neutral-100 border-2 border-black h-4 relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, ease: "linear" }}
                                        className="h-full bg-hyper-lime"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col gap-8 md:gap-10">
                            <div className="space-y-3 text-center md:text-left">
                                <h1 className="text-5xl md:text-6xl font-archivo leading-[0.9] uppercase tracking-tighter font-black italic">
                                    ENTRAR NO <span className="bg-hyper-lime px-2 border-2 border-black">JOGO</span>
                                </h1>
                                <p className="font-mono text-xs md:text-sm uppercase font-bold opacity-60 tracking-wider">
                                    Preencha para análise técnica.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Part 1: Input Fields (Heavy Duty) */}
                                <div className="flex flex-col">
                                    <label className="font-bold uppercase tracking-wide text-xs mb-2">SEU NOME</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="NOME COMPLETO"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-14 py-4 px-5 border-2 border-black rounded-none font-mono font-bold text-lg outline-none focus:border-[#CCFF00] focus:shadow-[4px_4px_0px_black] uppercase transition-all"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold uppercase tracking-wide text-xs mb-2">SEU NÚMERO (COM DDD)</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="(XX) X XXXX-XXXX"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className="h-14 py-4 px-5 border-2 border-black rounded-none font-mono font-bold text-lg outline-none focus:border-[#CCFF00] focus:shadow-[4px_4px_0px_black] transition-all"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold uppercase tracking-wide text-xs mb-2">@ DO INSTAGRAM</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="@USUARIO"
                                        value={formData.instagram}
                                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                        className="h-14 py-4 px-5 border-2 border-black rounded-none font-mono font-bold text-lg outline-none focus:border-[#CCFF00] focus:shadow-[4px_4px_0px_black] transition-all"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-bold uppercase tracking-wide text-xs mb-2 text-black/60">@ DO TIKTOK <span className="text-[10px] opacity-70">(OPCIONAL)</span></label>
                                    <input
                                        type="text"
                                        placeholder="@USUARIO"
                                        value={formData.tiktok}
                                        onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                                        className="h-14 py-4 px-5 border-2 border-black rounded-none font-mono font-bold text-lg outline-none focus:border-[#CCFF00] focus:shadow-[4px_4px_0px_black] transition-all"
                                    />
                                </div>

                                {/* Part 2: Disabled Button (Caution Tape) */}
                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    style={!isFormValid ? {
                                        backgroundImage: 'repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 10px, #d4d4d4 10px, #d4d4d4 20px)'
                                    } : {}}
                                    className={`
                                        w-full py-4 px-6 md:py-8 font-archivo font-black text-xl md:text-2xl uppercase 
                                        flex items-center justify-center gap-3 transition-all border-4 border-black mt-4 
                                        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                                        active:translate-y-[2px] active:shadow-none
                                        ${isFormValid
                                            ? "bg-hyper-lime text-black hover:bg-black hover:text-white"
                                            : "text-neutral-500 cursor-not-allowed opacity-80"
                                        }
                                    `}
                                >
                                    {isFormValid ? (
                                        <>
                                            <span>ENVIAR APLICAÇÃO</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="flex-shrink-0">
                                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" />
                                            </svg>
                                        </>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <span>BLOQUEADO</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="square"
                                                strokeLinejoin="miter"
                                                className="w-6 h-6 text-neutral-500"
                                            >
                                                <rect x="3" y="11" width="18" height="11" rx="0" ry="0"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default HypeQualifier;
