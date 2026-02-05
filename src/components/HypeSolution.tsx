import React from 'react';
import { motion } from 'framer-motion';
import { Package, Terminal, TrendingUp, Star } from 'lucide-react';

const HypeSolution: React.FC = () => {
    const cards = [
        {
            icon: Package,
            title: "PRODUTO",
            text: "Analisamos sua audiência e criamos o que vende. Do design à logística (Físico ou Digital).",
            color: "bg-electric-purple"
        },
        {
            icon: Terminal,
            title: "TECNOLOGIA",
            text: "Checkout próprio, área de membros e automação. Nada de ferramentas quebradas.",
            color: "bg-electric-purple"
        },
        {
            icon: TrendingUp,
            title: "FUNIL",
            text: "Copywriting, tráfego e upsell. Transformamos views em cash no piloto automático.",
            color: "bg-electric-purple"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 px-4 md:px-12 bg-bone border-t-[6px] border-black overflow-hidden font-space">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-10 pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative px-2">
                {/* Header Section */}
                <div className="mb-16 md:mb-24 text-center md:text-left relative flex flex-col md:flex-row items-center md:items-end justify-between gap-12 md:gap-0">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-9xl font-archivo leading-[0.8] md:leading-[0.75] mb-6 uppercase"
                        >
                            NÓS SOMOS<br />
                            <span className="text-white bg-black px-4 py-2 inline-block mt-4 border-[6px] border-black shadow-[6px_6px_0px_#6600FF] md:shadow-[10px_10px_0px_#6600FF]">O HYPE.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-3xl max-w-2xl font-bold uppercase tracking-tight md:border-l-[10px] border-black md:pl-8 mt-8 md:mt-12"
                        >
                            Zero Operação. Você cria conteúdo. <br />
                            A HYPECREATORZ entrega o resto.
                        </motion.p>
                    </div>

                    {/* REPOSITIONED STICKER - Floating between Header and Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                        viewport={{ once: true }}
                        className="relative mt-4 md:mt-0 md:mb-12"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-electric-purple blur-2xl opacity-40 animate-pulse"></div>
                            <div className="relative bg-electric-purple text-white border-[6px] border-black px-6 md:px-8 py-6 md:py-8 shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] rotate-[-15deg] flex flex-col items-center justify-center gap-2 transform hover:rotate-0 transition-transform">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                                    <Star fill="white" className="w-8 h-8 md:w-10 md:h-10" />
                                </motion.div>
                                <span className="font-archivo text-xl md:text-2xl leading-none text-center uppercase">ZERO<br />OPERAÇÃO</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* The "Machine" / Assembly Line Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
                    {/* BEEFED UP SVG Arrows for Desktop */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                        {/* ... (SVG path remains same) */}
                        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
                            {/* Arrow 1 to 2 */}
                            <motion.path
                                d="M350 220 C 400 140, 480 140, 520 220"
                                stroke="black"
                                strokeWidth="6"
                                strokeDasharray="12 12"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M515 210 L 525 225 L 508 225"
                                fill="black"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />

                            {/* Arrow 2 to 3 */}
                            <motion.path
                                d="M780 220 C 820 140, 900 140, 950 220"
                                stroke="black"
                                strokeWidth="6"
                                strokeDasharray="12 12"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.path
                                d="M945 210 L 955 225 L 938 225"
                                fill="black"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            />
                        </svg>
                    </div>

                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -12, transition: { duration: 0.2 } }}
                            className="group relative bg-white border-[6px] border-black p-8 md:p-10 shadow-[8px_8px_0px_#000] md:shadow-[10px_10px_0px_#000] hover:shadow-[15px_15px_0px_#000] md:hover:shadow-[20px_20px_0px_#000] transition-all z-10"
                        >
                            {/* Icon Container with PURPLE FILL & BLACK ICON */}
                            <div className={`${card.color} w-16 h-16 md:w-24 md:h-24 border-[4px] md:border-[6px] border-black mb-8 md:mb-10 flex items-center justify-center rotate-[-4deg] group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000]`}>
                                <card.icon className="w-8 h-8 md:w-10 md:h-10 text-black" strokeWidth={2.5} />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-archivo mb-4 md:mb-6 tracking-tighter group-hover:text-electric-purple transition-colors">
                                {card.title}
                            </h3>

                            <p className="text-lg md:text-xl font-space leading-tight font-bold opacity-80 uppercase">
                                {card.text}
                            </p>



                            {/* Sequential Number Badge */}
                            <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-black text-hyper-lime border-[4px] md:border-[6px] border-black flex items-center justify-center font-archivo text-base md:text-xl">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Heavy Industrial Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-black flex items-center overflow-hidden border-t-4 border-black">
                <motion.div
                    animate={{ x: [0, -128] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            <div className="w-16 h-12 bg-black border-r-[8px] border-electric-purple skew-x-[-30deg]" />
                            <div className="w-16 h-12 bg-black border-r-[8px] border-hyper-lime skew-x-[-30deg]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HypeSolution;
