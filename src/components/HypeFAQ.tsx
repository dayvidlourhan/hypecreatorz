import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
    return (
        <div
            className={`group mb-4 md:mb-6 border-4 border-black transition-all duration-300 ${isOpen ? 'bg-hyper-lime translate-x-1 translate-y-1 shadow-brutal-hover' : 'bg-white shadow-brutal'
                }`}
        >
            <button
                className="w-full flex items-stretch text-left focus:outline-none"
                onClick={onClick}
            >
                <div className="flex-grow p-4 md:p-8">
                    <span className="font-archivo text-lg md:text-2xl lg:text-3xl uppercase leading-none tracking-tighter block">
                        {question}
                    </span>
                </div>
                <div className={`w-14 md:w-24 flex-shrink-0 border-l-4 border-black flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-black/5' : 'bg-transparent'}`}>
                    {isOpen ? (
                        <Minus className="w-6 h-6 md:w-10 md:h-10 text-black stroke-[3]" />
                    ) : (
                        <Plus className="w-6 h-6 md:w-10 md:h-10 text-black stroke-[3]" />
                    )}
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-t-4 border-black' : 'max-h-0'
                    }`}
            >
                <div className="p-6 md:p-12 font-space text-lg md:text-2xl leading-tight font-medium text-black uppercase">
                    {answer}
                </div>
            </div>
        </div>
    );
};

interface HypeFAQProps {
    onOpenModal?: () => void;
}

const HypeFAQ: React.FC<HypeFAQProps> = ({ onOpenModal }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "PRECISO PAGAR ALGUMA COISA?",
            a: "Não. Nós investimos no produto e na tecnologia. Rachamos o lucro. Se você não vende, a gente não ganha. O risco é nosso."
        },
        {
            q: "VOU VIRAR VENDEDOR DE CURSO?",
            a: "Não. Você pode lançar marcas físicas, apps, comunidades ou serviços. O formato depende da sua audiência, não de uma fórmula mágica."
        },
        {
            q: "E SE EU QUISER SAIR?",
            a: "O contrato é simples. Os dados são seus, o equity é seu. Se a gente não estiver botando dinheiro no seu bolso, você tá livre."
        },
        {
            q: "PRECISO TER MILHÕES DE SEGUIDORES?",
            a: "Não. Precisamos de engajamento, não de números de vaidade. Se você tem 10k fiéis, já dá pra fazer 6 dígitos."
        }
    ];

    return (
        <section className="bg-bone py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
            {/* Background Decorativo com Pontos */}
            <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12 md:mb-16">
                    <h2 className="font-archivo text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-4 leading-none text-black uppercase italic">
                        PERGUNTAS DIFÍCEIS.
                    </h2>
                    <p className="font-space text-lg md:text-2xl font-bold bg-black text-white inline-block px-4 py-1 uppercase italic">
                        Sem letras miúdas. O jogo é limpo.
                    </p>
                </div>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={activeIndex === index}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Brutalism CTA centered and inverted */}
                <div className="mt-12 md:mt-20 flex justify-center">
                    <button
                        onClick={onOpenModal}
                        className="brutal-btn bg-black text-white px-8 md:px-10 py-5 md:py-6 font-archivo text-xl md:text-4xl hover:bg-hyper-lime hover:text-black transition-colors group uppercase italic"
                    >
                        AINDA TEM DÚVIDA?
                        <span className="hidden group-hover:inline ml-4">→</span>
                    </button>
                </div>
            </div>
        </section>

    );
};

export default HypeFAQ;
