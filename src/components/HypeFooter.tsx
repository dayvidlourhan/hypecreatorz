import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HypeFooterProps {
    onOpenModal?: () => void;
}

const HypeFooter: React.FC<HypeFooterProps> = ({ onOpenModal }) => {
    return (
        <footer id="manifesto" className="bg-black text-white selection:bg-hyper-lime selection:text-black">

            {/* PART A: THE FINAL CTA */}
            <div className="pt-24 pb-24 px-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <motion.h2
                        className="text-7xl md:text-[10rem] font-archivo leading-[0.85] tracking-tighter mb-10 text-white"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        CHEGA DE <br className="hidden md:block" /> DESCULPAS.
                    </motion.h2>

                    <motion.p
                        className="font-space text-gray-400 text-xl md:text-2xl mb-14 max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Você cria. A gente escala. Simples assim.
                    </motion.p>

                    <motion.button
                        onClick={onOpenModal}
                        className="group relative w-full md:w-auto bg-hyper-lime text-black font-archivo text-2xl md:text-4xl px-12 py-7 flex items-center justify-center gap-4 border-4 border-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffffff]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        APLICAR PARA O HYPE <ArrowRight size={40} className="group-hover:translate-x-3 transition-transform" />
                    </motion.button>
                </div>

                {/* Background Decor to Fill Void */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="w-full h-px bg-white/20 mb-8" />
                    <div className="w-full h-px bg-white/20 mb-8" />
                </div>
            </div>

            {/* PART B: MASSIVE GRID LAYOUT */}
            <div className="border-t-2 border-white grid grid-cols-1 md:grid-cols-2">

                {/* LEFT COLUMN: MANIFESTO & CONSOLE */}
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-white p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
                    <div className="mb-12">
                        <motion.p
                            className="font-space text-lg md:text-2xl leading-relaxed text-white"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            "A Era do Influenciador 'Outdoor' acabou. Não alugue sua audiência. Construa Equity. O Hype é seu."
                        </motion.p>
                    </div>

                    {/* RAW CONSOLE PROMPT */}
                    <div className="mt-12 font-mono flex items-center gap-2">
                        <span className="text-hyper-lime text-sm md:text-lg uppercase tracking-tight">
                            {`> READY_TO_SCALE_YOUR_EMPIRE`}
                        </span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-2.5 h-5 bg-hyper-lime"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: THE MASSIVE NETWORK LINKS */}
                <div className="p-8 md:p-16 flex flex-col justify-center gap-6 bg-neutral-900/20">
                    {["INSTAGRAM", "WHATSAPP"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="group flex items-center gap-4 text-white hover:text-hyper-lime transition-colors duration-200"
                        >
                            <span className="font-archivo font-black text-5xl md:text-7xl uppercase tracking-tighter">
                                {item}
                            </span>
                            <ArrowRight
                                size={48}
                                className="transform -rotate-45 group-hover:rotate-0 group-hover:text-hyper-lime transition-all duration-300 opacity-50 group-hover:opacity-100"
                            />
                        </a>
                    ))}

                    <div className="mt-8 border-t border-white/20 pt-8 flex gap-8">
                        <a href="#" className="font-space text-sm text-gray-400 hover:text-white uppercase tracking-widest hover:underline">Manifesto</a>
                        <a href="#" className="font-space text-sm text-gray-400 hover:text-white uppercase tracking-widest hover:underline">Sobre</a>
                        <a href="#" className="font-space text-sm text-gray-400 hover:text-white uppercase tracking-widest hover:underline">Login</a>
                    </div>
                </div>

            </div>

            {/* PART C: BOTTOM BAR */}
            <div className="border-t-2 border-white py-6 bg-black text-center">
                <p className="font-space text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase">
                    HYPECREATORZ © 2026 <span className="text-white mx-2">//</span> NO REFUNDS FOR LAZINESS.
                </p>
            </div>

        </footer>
    );
};

export default HypeFooter;
