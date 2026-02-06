import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HypeManifestoPageProps {
    onOpenModal: () => void;
}

const HypeManifestoPage: React.FC<HypeManifestoPageProps> = ({ onOpenModal }) => {
    return (
        <div className="min-h-screen bg-black text-white font-space selection:bg-[#CCFF00] selection:text-black">

            {/* STICKY NAVIGATION (HEADER) - PURE NEOBRUTALISM */}
            <nav className="fixed top-0 w-full z-[100] border-b-4 border-black bg-white px-4 md:px-10 py-3 md:py-4 flex items-center justify-between shadow-[0px_8px_0px_0px_rgba(204,255,0,1)]">
                <Link
                    to="/"
                    className="flex items-center gap-2 font-archivo text-[10px] md:text-sm font-black text-black hover:text-neutral-600 transition-colors group uppercase italic"
                >
                    <ArrowLeft size={20} strokeWidth={4} className="group-hover:-translate-x-2 transition-transform md:w-6 md:h-6" /> VOLTAR
                </Link>
                <div className="font-archivo text-base md:text-xl tracking-tighter bg-black text-[#CCFF00] px-3 py-1 border-2 border-black transform -rotate-1 shadow-[4px_4px_0px_0px_#CCFF00]">
                    MANIFESTO
                </div>
            </nav>

            <main className="pt-32 pb-20">

                {/* SESSÃO 1: O CHOQUE (HERO) */}
                <section className="px-6 md:px-10 py-16 md:py-24 mb-24 md:mb-40 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-archivo font-black leading-[0.85] tracking-tighter uppercase mb-8 italic">
                            PUBLI NÃO <br />
                            CONSTRÓI <br />
                            <span className="text-black bg-[#CCFF00] px-4 inline-block transform -rotate-1">PATRIMÔNIO.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-neutral-400 max-w-4xl mx-auto leading-tight font-medium">
                            Você vende post. A marca vende produto. Quem fica com o negócio de verdade?
                            Enquanto você negocia collab, a marca escala com sua audiência. O jogo tá viciado.
                        </p>
                    </motion.div>
                </section>

                {/* SESSÃO 2: A PROVA DO COLAPSO (DADOS) */}
                <section className="px-4 md:px-10 mb-32 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_#CCFF00]"
                        >
                            <div className="font-space text-xs mb-6 font-black uppercase tracking-widest bg-[#CCFF00] text-black px-2 py-1 inline-block transform -rotate-3 border-2 border-black">REGISTRO 01</div>
                            <div className="font-archivo text-6xl md:text-8xl font-black italic leading-none mb-4">93%</div>
                            <div className="font-archivo text-3xl md:text-4xl font-black uppercase leading-tight">
                                DOS CREATORS <br />
                                <span className="text-neutral-500">RELATAM BURNOUT PROFISSIONAL.</span>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_#CCFF00]"
                        >
                            <div className="font-space text-xs mb-6 font-black uppercase tracking-widest bg-[#CCFF00] text-black px-2 py-1 inline-block transform rotate-3 border-2 border-black">REGISTRO 02</div>
                            <div className="font-archivo text-6xl md:text-8xl font-black italic leading-none mb-4">65%</div>
                            <div className="font-archivo text-3xl md:text-4xl font-black uppercase leading-tight">
                                SE SENTEM <br />
                                <span className="text-neutral-500">MAL PAGOS PELO MERCADO.</span>
                            </div>
                        </motion.div>
                    </div>
                    <div className="text-center font-archivo text-neutral-500 text-lg md:text-2xl font-black uppercase tracking-tighter">
                        "E todo início de mês você volta pra estaca zero negociando quantidade de post."
                    </div>
                </section>

                {/* SESSÃO 3: A VERDADE NUA (REAL TALK) */}
                <section className="px-4 md:px-10 mb-32 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="border-l-8 border-[#CCFF00] pl-8 md:pl-12 py-4"
                    >
                        <h3 className="font-archivo text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter italic">
                            REAL TALK: <span className="text-[#CCFF00]">O MODELO FALIU.</span>
                        </h3>
                        <p className="text-2xl md:text-4xl font-archivo font-black uppercase leading-[1.1] tracking-tight text-neutral-300">
                            Você construiu a audiência. Por que o lucro é de terceiros? Chega de alugar sua influência.
                        </p>
                    </motion.div>
                </section>

                {/* SESSÃO 4: A REVELAÇÃO (BEM-VINDOS) */}
                <section className="px-4 md:px-10 mb-32 max-w-7xl mx-auto overflow-hidden py-12">
                    <div className="relative flex flex-col items-center md:items-start">
                        {/* Bloco 1: Boas Vindas */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white text-black border-4 border-black p-6 md:p-12 transform -rotate-2 z-20 relative mb-0 md:mb-[-2rem] shadow-[8px_8px_0px_0px_#CCFF00] self-start"
                        >
                            <h2 className="text-4xl md:text-6xl font-archivo font-black uppercase italic leading-none tracking-tighter">
                                SEJAM <br /> BEM-VINDOS
                            </h2>
                        </motion.div>

                        {/* Bloco 2: Nome Principal - Contraste Invertido */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-black text-[#CCFF00] border-4 border-[#CCFF00] p-8 md:p-16 transform rotate-2 z-30 relative md:ml-20 shadow-[12px_12px_0px_0px_#FFF] max-w-fit"
                        >
                            <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-archivo font-black uppercase italic leading-[0.8] tracking-tighter">
                                A HYPE <br /> CREATORZ.
                            </h2>
                        </motion.div>

                        {/* Bloco 3: Definição - O "Post-it" Gigante */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#CCFF00] text-black border-4 border-black p-8 md:p-14 transform -rotate-1 z-40 relative mt-8 md:mt-[-3rem] md:max-w-4xl md:ml-auto md:mr-10 shadow-brutal"
                        >
                            <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                                <Zap size={40} className="fill-black" />
                                <span className="font-archivo font-black text-2xl md:text-3xl uppercase italic">Product Studio AI-First</span>
                            </div>
                            <p className="text-xl md:text-4xl font-archivo font-black uppercase leading-tight italic">
                                Transformamos sua audiência em negócio próprio. <br />
                                <span className="bg-black text-white px-2 inline-block my-1">Nada de collab, nada de publi.</span> <br />
                                Você vira dono do produto que vende pra quem já te segue.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SESSÃO 5: A DIVISÃO DE TRABALHO (O MÉTODO) */}
                <section className="px-4 md:px-10 mb-32 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* LADO A: HYPE */}
                        <div className="bg-[#CCFF00] text-black p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
                            <div className="flex items-center gap-3 mb-8">
                                <Zap className="fill-black" size={32} />
                                <h4 className="font-archivo text-2xl md:text-3xl font-black uppercase italic">O QUE A GENTE FAZ:</h4>
                            </div>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <span className="font-archivo text-2xl mt-1">01</span>
                                    <div className="font-archivo text-xl md:text-2xl font-black uppercase leading-tight italic">
                                        Produtos com a sua cara <br />
                                        <span className="text-black/60 text-lg font-archivo font-black not-italic">(INFO, FÍSICO, TECH)</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="font-archivo text-2xl mt-1">02</span>
                                    <div className="font-archivo text-xl md:text-2xl font-black uppercase leading-tight italic">
                                        Ecossistema completo <br />
                                        <span className="text-black/60 text-lg font-archivo font-black not-italic">(PLATAFORMA, AUTOMAÇÃO, CHECKOUT)</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="font-archivo text-2xl mt-1">03</span>
                                    <div className="font-archivo text-xl md:text-2xl font-black uppercase leading-tight italic">
                                        Zero Operação <br />
                                        <span className="text-black/60 text-lg font-archivo font-black not-italic">(LOGÍSTICA, SUPORTE, MARKETING, ADMIN)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* LADO B: VOCÊ */}
                        <div className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_#CCFF00]">
                            <div className="flex items-center gap-3 mb-8">
                                <UserCircle2 size={32} />
                                <h4 className="font-archivo text-2xl md:text-3xl font-black uppercase italic">O QUE VOCÊ FAZ:</h4>
                            </div>
                            <div className="space-y-8">
                                <div className="p-6 border-4 border-black bg-neutral-100 transform -rotate-1">
                                    <p className="font-archivo text-3xl md:text-5xl font-black uppercase italic leading-none">
                                        PRODUZ CONTEÚDO. <br />
                                        <span className="text-neutral-400 text-xl md:text-2xl">SÓ ISSO.</span>
                                    </p>
                                </div>
                                <p className="font-archivo text-xl md:text-2xl font-black uppercase italic leading-tight">
                                    Cada story, cada reel agora vende o <span className="underline decoration-4 underline-offset-4">SEU negócio</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 6: O DUELO (COMPARATIVO) */}
                <section className="px-4 md:px-10 mb-32 max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-archivo font-black uppercase italic mb-12 text-center tracking-tighter">
                        ENQUANTO ELES ALUGAM AUDIÊNCIA, <br />
                        <span className="text-[#CCFF00]">VOCÊ POSSUI RECEITA.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                        {/* ELES */}
                        <div className="bg-neutral-800 p-8 md:p-16 border-4 border-neutral-700 flex flex-col justify-between">
                            <div>
                                <span className="font-archivo font-black text-neutral-500 text-sm uppercase block mb-8 underline decoration-4 underline-offset-4">O VELHO JOGO</span>
                                <h4 className="text-4xl md:text-5xl font-archivo font-black uppercase italic mb-8">ELES</h4>
                                <ul className="space-y-4 font-archivo font-bold text-lg text-neutral-400">
                                    <li>- POST ÚNICO</li>
                                    <li>- APROVAÇÃO DA MARCA</li>
                                    <li>- RECEITA PONTUAL</li>
                                </ul>
                            </div>
                            <div className="mt-12 p-4 border-4 border-black text-center font-archivo font-black text-sm text-neutral-600 bg-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                OBSOLETO
                            </div>
                        </div>

                        {/* VOCÊ / HYPE */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#CCFF00] text-black p-8 md:p-16 border-4 border-black shadow-[12px_12px_0px_0px_#FFF] flex flex-col justify-between relative z-10 md:-ml-4 lg:-ml-8"
                        >
                            <div>
                                <span className="bg-black text-[#CCFF00] px-3 py-1 font-archivo font-black text-xs md:text-sm uppercase inline-block mb-8 transform -rotate-2">NOVO PROTOCOLO</span>
                                <h4 className="text-4xl md:text-5xl font-archivo font-black uppercase italic mb-8">VOCÊ NO HYPE</h4>
                                <ul className="space-y-4 font-archivo font-black text-2xl md:text-3xl uppercase italic tracking-tighter">
                                    <li className="flex gap-3 text-black"><span>+</span> MENSALIDADE RECORRENTE</li>
                                    <li className="flex gap-3 text-black"><span>+</span> AUTONOMIA TOTAL</li>
                                    <li className="flex gap-3 text-black"><span>+</span> REVENUE SHARE DIRETO</li>
                                    <li className="flex gap-3 text-black"><span>+</span> EQUITY REAL</li>
                                </ul>
                            </div>
                            <div className="mt-12">
                                <div className="w-full bg-black h-12 flex items-center justify-center">
                                    <span className="text-[#CCFF00] font-archivo font-black italic text-xl uppercase tracking-widest">FULL GROWTH</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SESSÃO 7: A VALIDAÇÃO (MERCADO) */}
                <section className="px-4 md:px-10 mb-32 max-w-5xl mx-auto">
                    <div className="text-center bg-white text-black p-10 md:p-16 border-4 border-black shadow-[12px_12px_0px_0px_#CCFF00]">
                        <h4 className="font-archivo text-4xl md:text-7xl font-black uppercase italic leading-none mb-6">
                            +80% DOS CREATORS
                        </h4>
                        <p className="font-archivo text-2xl md:text-3xl uppercase font-black mb-8 leading-tight">
                            já querem possuir a própria audiência de verdade.
                        </p>
                        <hr className="border-2 border-black mb-8" />
                        <p className="text-xl md:text-2xl font-medium leading-relaxed font-space">
                            A diferença é: poucos sabem como. Nós entregamos da validação ao lançamento, tudo pronto.
                            <span className="font-black bg-black text-white px-2 py-1">Você só monetiza.</span>
                        </p>
                    </div>
                </section>

                {/* SESSÃO 8: O ULTIMATO (CTA FINAL) */}
                <section className="px-6 md:px-10 py-16 md:py-24 max-w-7xl mx-auto text-center">
                    <div className="mb-12">
                        <h5 className="text-2xl md:text-4xl font-archivo font-black uppercase italic tracking-tighter mb-2">MAIS QUE UM MOVIMENTO.</h5>
                        <div className="text-[#CCFF00] font-archivo font-black text-6xl md:text-8xl lg:text-[10rem] italic uppercase leading-[0.8]">É O HYPE.</div>
                    </div>

                    <motion.button
                        onClick={onOpenModal}
                        whileHover={{
                            x: -8,
                            y: -8,
                            boxShadow: "20px 20px 0px 0px #FFF"
                        }}
                        whileTap={{
                            x: 4,
                            y: 4,
                            boxShadow: "0px 0px 0px 0px #FFF"
                        }}
                        initial={{ x: 0, y: 0, boxShadow: "8px 8px 0px 0px #FFF" }}
                        className="w-full bg-[#CCFF00] text-black font-archivo font-black text-3xl md:text-5xl py-8 md:py-12 border-4 border-black uppercase italic tracking-tighter flex items-center justify-center gap-6 transition-none"
                    >
                        APLICAR PARA O HYPE <ArrowRight size={48} className="stroke-[4]" />
                    </motion.button>

                    <div className="mt-20 border-t-4 border-neutral-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="font-archivo text-2xl tracking-tighter">HYPECREATORZ</div>
                        <div className="font-archivo font-black text-neutral-600 text-xs text-center md:text-right uppercase">
                            COPYRIGHT © 2026 HYPECREATORZ STUDIO. <br />
                            ESTE É O SEU PATRIMÔNIO.
                        </div>
                    </div>
                </section>

            </main>

            {/* Industrial Decorative Background (Subtle) */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

        </div>
    );
};

export default HypeManifestoPage;
