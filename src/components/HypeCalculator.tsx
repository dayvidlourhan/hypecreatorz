import React from 'react';
import { ArrowLeftRight, Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HypeCalculatorProps {
    onOpenModal?: () => void;
}

const HypeCalculator: React.FC<HypeCalculatorProps> = ({ onOpenModal }) => {
    return (
        <section className="bg-black py-32 md:py-48 px-4 font-space relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. SECTION HEADLINE */}
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl md:text-8xl font-black font-archivo text-white uppercase italic tracking-tighter"
                    >
                        A MATEMÁTICA <br className="md:hidden" />
                        NÃO MENTE.
                    </motion.h2>
                </div>

                {/* 2. LAYOUT STRUCTURE (Two Columns + Center VS) */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* --- CENTER "VS" BADGE (Desktop Only) --- */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 bg-white border-[6px] border-black rounded-full flex items-center justify-center shadow-[0_0_0_10px_black]">
                            <span className="font-archivo font-black text-2xl text-black">VS</span>
                        </div>
                    </div>


                    {/* --- 3. LEFT CARD: "MODELO ANTIGO" (The Boring Paperwork) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-full flex flex-col"
                    >
                        <div className="bg-neutral-200 border-4 border-neutral-700 h-full p-6 md:p-8 flex flex-col relative group">
                            {/* STAMP OVERLAY */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="border-[6px] border-red-600 text-red-600 px-6 py-2 uppercase font-black text-3xl md:text-4xl tracking-widest whitespace-nowrap mask-grunge">
                                    BAIXA ESCALA
                                </div>
                            </div>

                            {/* Header */}
                            <div className="mb-6 border-b-4 border-neutral-700 pb-4">
                                <h3 className="font-archivo font-black text-2xl md:text-3xl text-neutral-800 uppercase tracking-tight">
                                    MODELO PUBLI
                                </h3>
                                <p className="font-mono text-sm text-neutral-600 mt-1 uppercase">
                                    // LIMITADO. BUROCRÁTICO.
                                </p>
                            </div>

                            {/* Inputs (Simulated) */}
                            <div className="space-y-4 flex-grow mb-8 font-mono">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-neutral-500 uppercase">AUDIÊNCIA</label>
                                    <div className="bg-neutral-300 border-2 border-neutral-400 p-3 text-neutral-600 font-bold">
                                        20.000 SEGUIDORES
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-neutral-500 uppercase">VOLUME</label>
                                    <div className="bg-neutral-300 border-2 border-neutral-400 p-3 text-neutral-600 font-bold">
                                        20 PUBLIS / MÊS
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-neutral-500 uppercase">VALOR</label>
                                    <div className="bg-neutral-300 border-2 border-neutral-400 p-3 text-neutral-600 font-bold">
                                        R$ 200,00 / POST
                                    </div>
                                </div>
                            </div>

                            {/* Total Footer */}
                            <div className="bg-neutral-800 p-6 text-center border-t-4 border-neutral-700 mt-auto">
                                <p className="text-neutral-400 text-xs font-bold uppercase mb-2">RENDIMENTO MENSAL</p>
                                <p className="text-3xl md:text-4xl font-mono font-bold text-neutral-300">
                                    R$ 4.000,00
                                </p>
                            </div>
                        </div>
                    </motion.div>


                    {/* --- 4. RIGHT CARD: "MODELO HYPE" (The Cash Machine) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 h-full flex flex-col"
                    >
                        {/* High Contrast Acid Green Card */}
                        <div className="bg-hyper-lime border-4 border-black shadow-[12px_12px_0px_0px_#FFF] h-full p-6 md:p-8 flex flex-col relative overflow-hidden">

                            {/* Header */}
                            <div className="mb-6 flex justify-between items-start border-b-4 border-black pb-4">
                                <div>
                                    <span className="bg-electric-purple text-white px-4 py-1.5 text-xs font-black font-mono uppercase border-4 border-black inline-block mb-2 -rotate-1 shadow-[4px_4px_0px_#000]">
                                        NOVA ERA
                                    </span>
                                    <h3 className="font-archivo font-black text-2xl md:text-3xl text-black uppercase tracking-tight italic">
                                        ECOSSISTEMA HYPE
                                    </h3>
                                </div>
                                <Zap className="w-8 h-8 fill-black" />
                            </div>

                            {/* Inputs (Active/Bold) */}
                            <div className="space-y-4 flex-grow mb-8 font-mono">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-black text-black uppercase">AUDIÊNCIA (MESMA BASE)</label>
                                    <div className="bg-white border-2 border-black p-3 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                                        20.000 SEGUIDORES
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-black text-black uppercase">CONVERSÃO (1%)</label>
                                    <div className="bg-white border-2 border-black p-3 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] flex justify-between items-center">
                                        <span>200 VENDAS</span>
                                        <ArrowLeftRight className="w-4 h-4 rotate-90" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-black text-black uppercase">PRODUTO PRÓPRIO</label>
                                    <div className="bg-white border-2 border-black p-3 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                                        R$ 97,00 (TICKET)
                                    </div>
                                </div>
                            </div>

                            {/* Total Footer */}
                            <div className="bg-black p-6 text-center border-t-4 border-black mt-auto relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-hyper-lime">
                                    <Check className="w-6 h-6 border-2 border-hyper-lime rounded-full p-0.5" />
                                </div>
                                <p className="text-hyper-lime text-xs font-black uppercase mb-2 tracking-widest">LUCRO MENSAL</p>
                                <p className="text-4xl md:text-5xl font-archivo font-black text-white italic tracking-tighter drop-shadow-lg">
                                    R$ 19.400<span className="text-2xl opacity-50">,00</span>
                                </p>
                            </div>

                            {/* 5. CTA BUTTON (Attached) */}
                            <button
                                onClick={onOpenModal}
                                className="w-full mt-4 bg-black text-white font-archivo font-black text-xl uppercase py-4 border-4 border-black hover:bg-white hover:text-black transition-colors shadow-none hover:shadow-[8px_8px_0px_0px_#000]"
                            >
                                ESCALE AGORA {"->"}
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style>{`
                .mask-grunge {
                    mask-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/></svg>");
                }
            `}</style>
        </section>
    );
};

export default HypeCalculator;
