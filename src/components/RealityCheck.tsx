import React from 'react';
import { motion } from 'framer-motion';
import { X, Zap, Check, ArrowRight } from 'lucide-react';

interface RealityCheckProps {
    onOpenModal: () => void;
}

const RealityCheck: React.FC<RealityCheckProps> = ({ onOpenModal }) => {
    return (
        <section id="modelo" className="relative py-16 md:py-24 px-6 md:px-12 bg-bone border-t-8 border-black overflow-hidden selection:bg-black selection:text-hyper-lime">
            {/* Background Accent - Fragmented Geometry */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-hyper-lime/5 -rotate-45 translate-x-48 -translate-y-48 border-b-8 border-l-8 border-black -z-10" />

            {/* Header Content - Typography on Steroids */}
            <div className="max-w-7xl mx-auto mb-56 md:mb-80 relative px-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block bg-[#FF0033] text-white font-archivo px-4 md:px-6 py-1 md:py-2 border-4 border-black mb-6 md:mb-8 rotate-[-2deg] text-lg md:text-xl shadow-[4px_4px_0px_#000]"
                >
                    REAL TALK 💀
                </motion.div>

                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 50, skewX: -5 }}
                        whileInView={{ opacity: 1, y: 0, skewX: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl lg:text-[10rem] font-archivo leading-[0.8] md:leading-[0.75] tracking-[-0.06em] uppercase italic"
                    >
                        O MODELO<br /> FALIU.
                    </motion.h2>
                </div>
            </div>

            {/* Comparison Grid & Subtitle Alignment */}
            <div className="max-w-7xl mx-auto relative px-2">

                {/* Subtitle adjusted - Fixed text overlap and added emphasis */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute -top-48 left-0 w-full text-lg md:text-4xl font-space max-w-3xl leading-loose md:leading-[3.5rem] border-l-8 border-black pl-6 md:pl-8 uppercase font-bold z-30"
                >
                    93% dos creators relatam burnout. <span className="bg-black text-[#CCFF00] px-2 py-1 box-decoration-clone shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">65% se sentem mal pagos.</span> Todo mês você volta para a estaca zero negociando post.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-0 items-center relative">
                    {/* VS Badge - Hard Shadow - Now visible on mobile between cards */}
                    <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-20 h-20 md:w-28 md:h-28 bg-white border-4 border-black rounded-full items-center justify-center font-archivo text-3xl md:text-5xl shadow-[4px_4px_0px_#000] rotate-12">
                        VS
                    </div>

                    {/* CARD 1: O ANTIGO (Expired/Bureaucratic) */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -1, x: -50 }}
                        whileInView={{ opacity: 1, rotate: -2, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring", damping: 15 }}
                        className="bg-neutral-200 border-4 border-black p-6 md:p-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] relative z-10 grayscale-[0.5]"
                    >
                        <div className="mb-8 md:mb-10">
                            <span className="inline-block bg-[#FF0033] text-white text-[13px] md:text-base font-mono font-bold px-6 py-2 border-4 border-black uppercase tracking-tight mb-3 -rotate-2 shadow-[6px_6px_0px_#000]">
                                SYSTEM_ERROR_01
                            </span>
                            <h3 className="text-3xl md:text-6xl font-archivo font-black tracking-tighter opacity-80 text-neutral-500 leading-none">MODELO PUBLI</h3>
                        </div>

                        <ul className="space-y-6 md:space-y-8 font-space text-lg md:text-2xl">
                            {[
                                "Vende post avulso",
                                "Aprovação chata",
                                "Audiência da marca",
                                "Zero Equity"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 md:gap-6 opacity-70 group decoration-black line-through decoration-4 text-neutral-500">
                                    <div className="p-1 border-2 border-black bg-gray-200 group-hover:bg-[#FF0033] group-hover:opacity-100 transition-all">
                                        <X size={18} className="opacity-40 group-hover:opacity-100" />
                                    </div>
                                    <span className="italic">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CARD 2: O NOVO (Vibrant/High Tension) */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 1, x: 50 }}
                        whileInView={{ opacity: 1, rotate: 4, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", damping: 10 }}
                        className="bg-hyper-lime border-[6px] md:border-[8px] border-black p-6 md:p-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-20 md:-ml-6"
                    >
                        {/* Floating Zap Element - Responsive sizing */}
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_#000]"
                        >
                            <Zap className="w-8 h-8 md:w-12 md:h-12 fill-black" />
                        </motion.div>

                        <div className="mb-8 md:mb-10">
                            <span className="inline-block bg-[#7C3AED] text-white text-[13px] md:text-base font-mono font-bold px-6 py-2 border-4 border-black uppercase tracking-tight mb-3 -rotate-2 shadow-[6px_6px_0px_#000]">
                                NEW_ERA_2026
                            </span>
                            <h3 className="text-3xl md:text-7xl font-archivo font-black tracking-tighter italic leading-none">HYPE CREATORZ</h3>
                        </div>

                        <ul className="space-y-6 md:space-y-8 font-space text-lg md:text-3xl font-black">
                            {[
                                "Receita Recorrente",
                                "Autonomia Total",
                                "Dono dos dados",
                                "Constrói Equity"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 md:gap-6 group">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        className="p-1 border-2 md:border-4 border-black bg-white shadow-[4px_4px_0px_#000] group-hover:bg-black group-hover:text-hyper-lime transition-all"
                                    >
                                        <Check className="w-6 h-6 md:w-8 md:h-8" strokeWidth={5} />
                                    </motion.div>
                                    <span className="uppercase text-base md:text-3xl">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <motion.button
                            onClick={onOpenModal}
                            whileHover={{ scale: 1.02, x: 4, y: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className="cursor-pointer mt-12 md:mt-16 w-full bg-black text-white py-6 md:py-8 font-archivo text-xl md:text-3xl border-4 border-black shadow-[8px_8px_0px_0px_#FF0033] hover:shadow-none transition-all flex items-center justify-center gap-4 md:gap-6"
                        >
                            DOMINE O JOGO <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.button>

                    </motion.div>
                </div>
            </div>


            {/* Decorative Grid Lines - More Intense */}
            <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-20 pointer-events-none -z-20" />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-black -z-10" />
        </section>
    );
};

export default RealityCheck;
