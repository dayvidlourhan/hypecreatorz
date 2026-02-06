import { Terminal, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

interface HypeCalculatorProps {
    onOpenModal?: () => void;
}

const HypeCalculator: React.FC<HypeCalculatorProps> = ({ onOpenModal }) => {
    return (
        <section className="bg-black py-16 md:py-24 px-4 font-space relative overflow-hidden">
            {/* 1. BACKGROUND TEXTURE (SUBTLE CYBERPUNK GRID) */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-60"
                    style={{
                        backgroundImage: `linear-gradient(rgba(20,20,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Radial Vignette to fade grid at edges */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header with Neon Bloom */}
                <div className="text-center mb-12 md:mb-16 px-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-5xl md:text-7xl font-archivo text-white mb-4 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] uppercase italic"
                    >
                        A MATEMÁTICA DO HYPE.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-base md:text-xl font-space uppercase tracking-widest"
                    >
                        Pare de contar likes. <span className="text-hyper-lime opacity-80">Comece a contar margem.</span>
                    </motion.p>
                </div>

                {/* 2. NARROW RECEIPT CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mx-auto w-full max-w-xl md:max-w-2xl px-0 md:px-2 mb-12 md:mb-16"
                >
                    {/* Neon Bloom Outer Glow */}
                    <div className="absolute -inset-2 bg-hyper-lime/10 blur-2xl opacity-40 rounded-full" />

                    <div
                        className="relative bg-[#080808] border-2 border-hyper-lime shadow-[6px_6px_0px_0px_#CCFF00] md:shadow-[8px_8px_0px_0px_#CCFF00] overflow-hidden"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 98% 99%, 96% 100%, 94% 99%, 92% 100%, 90% 99%, 88% 100%, 86% 99%, 84% 100%, 82% 99%, 80% 100%, 78% 99%, 76% 100%, 74% 99%, 72% 100%, 70% 99%, 68% 100%, 66% 99%, 64% 100%, 62% 99%, 60% 100%, 58% 99%, 56% 100%, 54% 99%, 52% 100%, 50% 99%, 48% 100%, 46% 99%, 44% 100%, 42% 99%, 40% 100%, 38% 99%, 36% 100%, 34% 99%, 32% 100%, 30% 99%, 28% 100%, 26% 99%, 24% 100%, 22% 99%, 20% 100%, 18% 99%, 16% 100%, 14% 99%, 12% 100%, 10% 99%, 8% 100%, 6% 99%, 4% 100%, 2% 99%, 0 100%)'
                        }}
                    >
                        {/* Terminal Header */}
                        <div className="bg-hyper-lime py-3 px-4 md:px-6 flex justify-between items-center text-black font-bold border-b border-black">
                            <div className="flex items-center gap-2 md:gap-3">
                                <Terminal className="w-4 h-4 md:w-5 md:h-5 drop-shadow-sm" />
                                <span className="text-[10px] md:text-sm tracking-widest font-black uppercase">EXTRATO_RENDA_PROJETADA</span>
                            </div>
                            <div className="flex gap-1 grayscale opacity-50">
                                <div className="w-3 md:w-4 h-1 bg-black" />
                                <div className="w-1 h-2 md:h-3 bg-black" />
                            </div>
                        </div>

                        {/* Receipt Content */}
                        <div className="p-6 md:p-14 text-hyper-lime space-y-8 md:space-y-10">
                            {/* 4. RESPONSIVE DOTTED LINES OVERHAUL */}
                            <div className="space-y-4 md:space-y-6">
                                {[
                                    { label: "AUDIÊNCIA TOTAL", value: "100K FOLLOWERS" },
                                    { label: "CONVERSÃO MÉDIA (1%)", value: "1.000 VENDAS" },
                                    { label: "TICKET MÉDIO", value: "R$ 97,00" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-end gap-2 sm:gap-3 text-[9px] sm:text-xs md:text-base">
                                        <span className="flex-none font-bold uppercase tracking-tight text-white/60">{item.label}</span>
                                        <div className="flex-grow border-b-2 border-dotted border-hyper-lime/30 mb-1 hidden sm:block" />
                                        <div className="flex-grow border-b border-white/10 mb-1 sm:hidden" />
                                        <span className="flex-none font-bold text-white bg-white/5 px-2 py-0.5 border border-white/10">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Separator */}
                            <div className="relative py-2 md:py-4">
                                <div className="border-t-2 md:border-t-[3px] border-dashed border-hyper-lime/40 w-full" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#080808] px-4 text-[9px] md:text-xs text-white/40 tracking-[0.5em]">
                                    CALC_FINAL
                                </div>
                            </div>

                            {/* Total Result with Neon Bloom */}
                            <div className="flex flex-col gap-4 md:gap-6 pt-2 md:pt-4">
                                <div>
                                    <p className="text-[9px] md:text-xs uppercase mb-1 md:mb-2 opacity-60 flex items-center gap-2">
                                        <Calculator className="w-3 h-3 md:w-4 md:h-4" />
                                        REVENUE_STREAMS_ESTIMATED_
                                    </p>
                                    <h3 className="text-lg md:text-2xl text-white font-black leading-none uppercase tracking-tighter">
                                        FATURAMENTO MENSAL
                                    </h3>
                                </div>

                                <div className="flex flex-wrap items-baseline gap-x-0 sm:gap-x-3 max-w-full">
                                    <span className="text-[11vw] xs:text-5xl sm:text-5xl md:text-7xl font-archivo leading-[0.85] md:leading-none text-hyper-lime drop-shadow-[0_0_12px_#CCFF00] uppercase break-words inline-block">
                                        R$ 97.000,00
                                        <motion.div
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="inline-block w-[2vw] h-[8vw] md:w-1.5 md:h-14 bg-hyper-lime drop-shadow-[0_0_8px_#CCFF00] ml-2 translate-y-1 md:translate-y-2 align-baseline"
                                        />
                                    </span>
                                </div>
                            </div>

                            {/* Terminal Metadata */}
                            <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col gap-2 opacity-30 select-none">
                                <div className="text-[7px] md:text-[10px] font-mono leading-none tracking-widest break-all">
                                    MD5_HASH: F7A3B12D9E... [ENC_STATUS: SECURE_CHANNEL_V1]
                                </div>
                                <div className="text-[7px] md:text-[10px] font-mono leading-none tracking-[0.3em] overflow-hidden whitespace-nowrap">
                                    ////////////////////////////////////////////////////////////////////////////////
                                </div>
                            </div>
                        </div>

                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-40 animate-scanline bg-gradient-to-b from-transparent via-white/5 to-transparent h-12 md:h-20" />
                    </div>
                </motion.div>

                {/* CTA Button */}
                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenModal}
                        className="group relative bg-hyper-lime text-black px-8 md:px-14 py-5 md:py-8 text-xl md:text-3xl font-archivo border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none transition-all uppercase"
                    >
                        <span className="relative z-10">ESCALE AGORA</span>
                    </motion.button>
                    <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-6 opacity-40">
                        <span className="h-px w-8 md:w-12 bg-white" />
                        <p className="text-[9px] md:text-xs uppercase tracking-[0.4em] text-white">
                            SISTEMA_DISPONÍVEL
                        </p>
                        <span className="h-px w-8 md:w-12 bg-white" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HypeCalculator;
