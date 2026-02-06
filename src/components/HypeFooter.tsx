import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HypeFooterProps {
    onOpenModal?: () => void;
}

const HypeFooter: React.FC<HypeFooterProps> = ({ onOpenModal }) => {
    return (
        <footer id="manifesto" className="bg-black text-white selection:bg-hyper-lime selection:text-black">

            {/* PART A: THE FINAL CTA */}
            <div className="py-16 md:py-24 px-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <motion.h2
                        className="text-5xl md:text-8xl lg:text-[10rem] font-archivo leading-[0.85] tracking-tighter mb-10 text-white italic uppercase text-center"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        CHEGA DE <br className="hidden md:block" /> DESCULPAS.
                    </motion.h2>

                    <motion.p
                        className="font-space text-gray-400 text-xl md:text-2xl mb-14 max-w-2xl text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Você cria. A gente escala. Simples assim.
                    </motion.p>

                    <motion.button
                        onClick={onOpenModal}
                        className="group relative w-full md:w-auto bg-hyper-lime text-black font-archivo text-2xl md:text-4xl px-12 py-7 flex items-center justify-center gap-4 border-4 border-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffffff] italic"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        APLICAR PARA O HYPE <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-3 transition-transform" />
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

                {/* LEFT COLUMN: MANIFESTO & BADGE */}
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-white p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
                    <div className="mb-12">
                        <motion.p
                            className="font-space text-lg md:text-2xl leading-relaxed text-white italic"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            "A Era do Influenciador 'Outdoor' acabou. Não alugue sua audiência. Construa Equity. O Hype é seu."
                        </motion.p>
                    </div>

                    {/* NEOBRUTALIST BADGE */}
                    <div className="mt-12">
                        <motion.div
                            className="inline-block bg-hyper-lime text-black border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_#ffffff] -rotate-1 hover:rotate-0 transition-transform cursor-default"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="font-archivo font-black text-xl md:text-3xl uppercase tracking-tighter leading-none italic">
                                READY TO SCALE<br />YOUR EMPIRE.
                            </span>
                        </motion.div>
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
                            <span className="font-archivo font-black text-4xl md:text-7xl uppercase tracking-tighter break-words italic">
                                {item}
                            </span>
                            <ArrowRight
                                className="w-12 h-12 md:w-16 md:h-16 transform -rotate-45 group-hover:rotate-0 group-hover:text-hyper-lime transition-all duration-300 opacity-50 group-hover:opacity-100"
                            />
                        </a>
                    ))}

                    <div className="mt-8 border-t border-white/20 pt-8 flex flex-wrap gap-12">
                        <Link to="/manifesto" className="font-archivo text-xl md:text-2xl text-white hover:text-hyper-lime uppercase tracking-tighter italic transition-colors">
                            MANIFESTO
                        </Link>
                        <a href="#modelo" className="font-archivo text-xl md:text-2xl text-white hover:text-hyper-lime uppercase tracking-tighter italic transition-colors">
                            O MODELO
                        </a>
                        <a href="#faq" className="font-archivo text-xl md:text-2xl text-white hover:text-hyper-lime uppercase tracking-tighter italic transition-colors">
                            FAQ
                        </a>
                        <button
                            onClick={onOpenModal}
                            className="font-archivo text-xl md:text-2xl text-hyper-lime hover:text-white uppercase tracking-tighter italic transition-colors flex items-center gap-2"
                        >
                            APLICAR <Zap size={20} className="fill-hyper-lime group-hover:fill-white" />
                        </button>
                    </div>
                </div>

            </div>

            {/* PART C: BOTTOM BAR */}
            <div className="border-t-2 border-white py-6 bg-black text-center">
                <p className="font-space text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase">
                    HYPECREATORZ © 2026 <span className="text-white mx-2">//</span> NO REFUNDS FOR LAZINESS.
                </p>
            </div>

            {/* Final Visual Accent */}
            <div className="h-3 w-full bg-hyper-lime shadow-[0_-10px_40px_rgba(204,255,0,0.4)]" />
        </footer>
    );
};

export default HypeFooter;
