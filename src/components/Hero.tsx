import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Zap, Check, Star } from 'lucide-react';

const Hero: React.FC = () => {
    const marqueeVariants: Variants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    const tickerText = "EQUITY • PRODUTO PRÓPRIO • ZERO PUBLI • HYPE • EQUITY • PRODUTO PRÓPRIO • ZERO PUBLI • HYPE • ";

    return (
        <div className="relative w-full overflow-hidden bg-dots min-h-screen flex flex-col font-space">
            {/* Top Marquee */}
            <div className="w-full bg-black py-2 md:py-3 border-b-4 border-black overflow-hidden whitespace-nowrap z-50">
                <motion.div
                    className="flex gap-4 text-white font-archivo text-lg md:text-xl"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <span>{tickerText}</span>
                    <span>{tickerText}</span>
                    <span>{tickerText}</span>
                </motion.div>
            </div>

            {/* Navbar */}
            <nav className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6 border-b-4 border-black bg-white sticky top-[44px] md:top-[48px] z-40">
                <div className="text-xl md:text-3xl font-archivo tracking-tighter">
                    HYPECREATORZ
                </div>

                <div className="hidden md:flex items-center gap-8 font-bold text-sm">
                    <a href="#" className="hover:underline underline-offset-4">MANIFESTO</a>
                    <a href="#" className="hover:underline underline-offset-4">CRIADORES</a>
                    <a href="#" className="hover:underline underline-offset-4">PRODUTOS</a>
                    <a href="#" className="hover:underline underline-offset-4">ENTRAR</a>
                </div>

                <button className="brutal-btn bg-black text-white font-archivo px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 text-xs md:text-sm uppercase">
                    INICIAR <Zap size={14} className="fill-hyper-lime text-hyper-lime" />
                </button>
            </nav>

            {/* Hero Content */}
            <section className="flex-1 flex flex-col lg:flex-row border-b-4 border-black relative">

                {/* Floating Sticker / Badge - Hidden on very small screens, adjusted for mobile */}
                <motion.div
                    className="absolute left-[85%] top-[5%] md:left-1/2 md:top-1/3 -translate-x-1/2 -translate-y-1/2 z-40 block"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -15 }}
                    transition={{ type: "spring", damping: 10, delay: 1 }}
                >
                    <div className="w-16 h-16 md:w-32 md:h-32 bg-electric-purple text-white brutal-border rounded-full flex items-center justify-center font-archivo text-xs md:text-2xl shadow-brutal text-center leading-none p-2 md:p-4 transform hover:scale-110 transition-transform cursor-pointer">
                        AI <br className="hidden md:block" /> FIRST
                    </div>
                </motion.div>

                {/* Left Content */}
                <div className="flex-1 p-6 md:p-12 lg:p-20 border-r-0 lg:border-r-4 border-black flex flex-col justify-center gap-6 md:gap-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="bg-black text-white font-space px-3 py-1 text-xs md:text-sm tracking-widest uppercase">
                            🚀 PRODUCT STUDIO AI-FIRST
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-8xl leading-[0.9] font-archivo"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        PUBLI NÃO<br />
                        CONSTRÓI<br />
                        <span className="text-black bg-hyper-lime px-2 brutal-border inline-block mt-2">PATRIMÔNIO.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-2xl font-space max-w-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Chega de alugar sua audiência. Entregamos produto, tecnologia e funis prontos. Você cria conteúdo, nós cuidamos da operação. Vire dono do jogo.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-8 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <button className="brutal-btn bg-hyper-lime text-black text-xl md:text-2xl font-archivo px-8 md:px-12 py-4 md:py-5 uppercase leading-none">
                            CRIAR MEU PRODUTO
                        </button>
                        <a href="#" className="font-space font-bold border-b-4 border-black pb-1 flex items-center justify-center sm:justify-start gap-2 group text-lg md:text-xl uppercase">
                            LER MANIFESTO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Visual (Asymmetric / Dashboard Card) */}
                <div className="flex-1 bg-white/50 relative overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-20 bg-dots border-t-4 border-black lg:border-t-0">
                    <div className="relative w-full max-w-[450px]">

                        {/* Stacking Effect - Background Cards - Scaled down for mobile */}
                        <motion.div
                            className="absolute inset-0 bg-hyper-lime brutal-border translate-x-4 translate-y-4 md:translate-x-12 md:translate-y-12 rotate-6 z-0"
                            animate={{ rotate: [6, 8, 6] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-electric-purple brutal-border -translate-x-2 translate-y-2 md:-translate-x-8 md:translate-y-8 -rotate-12 z-0"
                            animate={{ rotate: [-12, -10, -12] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />

                        {/* Main Dashboard Card */}
                        <motion.div
                            className="relative bg-white brutal-border shadow-brutal p-4 md:p-6 flex flex-col gap-4 md:gap-6 z-20 -rotate-3"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.02, rotate: -1, transition: { duration: 0.2 } }}
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full" />
                                    <span className="font-bold text-[10px] md:text-sm uppercase tracking-wider">DASHBOARD</span>
                                </div>
                                <div className="bg-black text-hyper-lime px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-archivo flex items-center gap-1">
                                    <Star size={10} fill="#CCFF00" /> OWNER
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="aspect-[4/5] bg-bone brutal-border relative overflow-hidden group">
                                <img
                                    src="/hero-creators.png"
                                    alt="Criadores HYPECREATORZ"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Overlay Label */}
                                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm brutal-border p-2 md:p-3 flex items-center justify-between">
                                    <div className="font-archivo text-sm md:text-lg">HYPE CREW</div>
                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center border-2 border-black">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                </div>
                            </div>

                            {/* Stats Badges */}
                            <div className="grid grid-cols-2 gap-2 md:gap-4">
                                <div className="brutal-border bg-black text-white p-2 md:p-3 flex flex-col items-center justify-center gap-0.5 md:gap-1 transform -rotate-1 hover:rotate-0 transition-transform">
                                    <span className="text-[8px] md:text-xs uppercase opacity-70">VENDAS</span>
                                    <span className="font-archivo text-base md:text-xl text-hyper-lime">R$ 145k</span>
                                </div>
                                <div className="brutal-border bg-hyper-lime text-black p-2 md:p-3 flex flex-col items-center justify-center gap-0.5 md:gap-1 transform rotate-2 hover:rotate-0 transition-transform">
                                    <span className="text-[8px] md:text-xs uppercase opacity-70 font-bold">MARGEM</span>
                                    <span className="font-archivo text-base md:text-xl">90%</span>
                                </div>
                            </div>

                            {/* Card Footer Text */}
                            <div className="border-t-2 border-black/10 pt-3 md:pt-4 font-space text-[8px] md:text-[10px] leading-tight opacity-60 uppercase">
                                Product studio powered by AI // Full-stack ownership // Zero publi dependency
                            </div>
                        </motion.div>

                        {/* Floating Small Elements - Hidden on mobile */}
                        <motion.div
                            className="absolute -top-10 -left-10 w-20 h-20 bg-white border-2 border-dashed border-black rounded-full z-30 hidden md:block"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>
            </section>

            {/* Bottom Marquee (Reverse) */}
            <div className="w-full bg-hyper-lime py-2 md:py-4 border-t-4 border-black overflow-hidden whitespace-nowrap mt-auto z-50">
                <motion.div
                    className="flex gap-4 text-black font-archivo text-xl md:text-2xl uppercase italic"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    <span>{tickerText}</span>
                    <span>{tickerText}</span>
                    <span>{tickerText}</span>
                </motion.div>
            </div>

        </div>
    );
};

export default Hero;
