import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const HypeFooter = () => {
    return (
        <footer className="bg-black text-white selection:bg-hyper-lime selection:text-black">
            {/* PART A: THE FINAL CTA */}
            <div className="border-t-4 border-white/20 pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.h2
                        className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-archivo leading-[0.85] tracking-tighter mb-8 md:mb-10 italic uppercase"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        CHEGA DE <br className="hidden md:block" /> DESCULPAS.
                    </motion.h2>

                    <motion.p
                        className="font-space text-gray-400 text-lg md:text-2xl mb-10 md:mb-14 max-w-2xl px-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Você cria. A gente escala. Simples assim.
                    </motion.p>

                    <motion.button
                        className="group relative w-full md:w-auto bg-hyper-lime text-black font-archivo text-xl md:text-4xl px-8 md:px-12 py-5 md:py-7 flex items-center justify-center gap-4 border-4 border-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ffffff20] italic"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        APLICAR PARA O HYPE <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-3 transition-transform" />

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-hyper-lime/0 group-hover:bg-hyper-lime/20 blur-2xl transition-all -z-10" />
                    </motion.button>
                </div>
            </div>

            {/* DIVIDER 1: SKELETON LINE */}
            <div className="border-t border-neutral-800 w-full" />

            {/* PART B: THE GRID */}
            <div className="py-12 md:py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-5 md:gap-6">
                        <h3 className="text-3xl md:text-4xl font-archivo tracking-tighter italic">HYPECREATORZ®</h3>
                        <div className="flex items-center gap-2 font-space text-xs">
                            <span className="w-2.5 h-2.5 bg-hyper-lime rounded-full animate-pulse shadow-[0_0_10px_#CCFF00]" />
                            <span className="text-hyper-lime font-bold tracking-widest uppercase">[SYSTEM_ONLINE]</span>
                        </div>
                        <p className="font-space text-gray-500 text-sm mt-2 md:mt-4 max-w-[280px] leading-relaxed">
                            TRANSFORMANDO AUDIÊNCIA EM PATRIMÔNIO REAL ATRAVÉS DE PRODUTO, TECNOLOGIA E IA.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <span className="font-archivo text-sm text-gray-600 uppercase tracking-[0.2em] italic">Diretório</span>
                        <ul className="flex flex-col gap-4 md:gap-5 font-archivo text-lg md:text-xl italic">
                            {["MANIFESTO", "SOBRE", "LOGIN", "TERMOS"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="inline-block transition-all hover:translate-x-2 hover:text-hyper-lime"
                                    >
                                        // {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Socials & Terminal */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <span className="font-archivo text-sm text-gray-600 uppercase tracking-[0.2em] italic">Conexão</span>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Youtube, href: "#" }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className="p-4 md:p-5 border-2 border-white/10 hover:border-hyper-lime hover:text-hyper-lime transition-all group"
                                >
                                    <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>

                        {/* TERMINAL STATUS BOX UPGRADE */}
                        <div className="mt-4 md:mt-auto bg-black p-5 border border-neutral-800 font-mono relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-2">
                                <span className="text-[10px] text-neutral-500 tracking-widest uppercase">STATUS_OUTPUT</span>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] md:text-xs text-hyper-lime uppercase tracking-widest leading-none">READY_TO_SCALE_YOUR_EMPIRE</span>
                                <motion.span
                                    animate={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="w-2 h-4 bg-hyper-lime"
                                />
                            </div>
                            {/* Scanning line effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hyper-lime/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scanline pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>

            {/* DIVIDER 2: ABOVE COPYRIGHT */}
            <div className="border-t border-neutral-800 w-full" />

            {/* PART C: THE COPYRIGHT BAR */}
            <div className="py-8 md:py-10 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left font-space text-[10px] md:text-[11px] text-gray-600 tracking-[0.15em]">
                    <p>© 2026 HYPECREATORZ INC. ALL RIGHTS RESERVED.</p>
                    <p className="text-hyper-lime font-bold uppercase tracking-widest">NO REFUNDS FOR LAZINESS.</p>
                </div>
            </div>

            {/* Industrial Bottom Stripe */}
            <div className="h-3 w-full bg-hyper-lime shadow-[0_-10px_40px_rgba(204,255,0,0.4)]" />
        </footer>
    );
};


export default HypeFooter;
