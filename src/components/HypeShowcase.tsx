import React from 'react';
import { X, Minus, Square, Users, Package, Cpu, Loader2 } from 'lucide-react';

interface WindowProps {
    title: string;
    headerColor: string;
    textColor: string;
    footerText: string;
    className?: string;
    icon: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
    title,
    headerColor,
    textColor,
    footerText,
    className = "",
    icon
}) => {
    return (
        <div className={`
      bg-white border-4 border-black 
      shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] 
      ${className}
    `}>
            {/* Top Bar */}
            <div
                className="flex items-center justify-between border-b-4 border-black p-2 md:p-4"
                style={{ backgroundColor: headerColor }}
            >
                <span className={`font-space font-bold uppercase truncate text-xs md:text-base ${textColor}`}>
                    {title}
                </span>
                <div className="flex gap-1 md:gap-2">
                    <div className={`p-0.5 md:p-1 border-2 border-black bg-white/20 ${textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
                        <Minus className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                    </div>
                    <div className={`p-0.5 md:p-1 border-2 border-black bg-white/20 ${textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
                        <Square className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                    </div>
                    <div className={`p-0.5 md:p-1 border-2 border-black bg-white/20 ${textColor === 'text-white' ? 'text-white' : 'text-black'} cursor-not-allowed`}>
                        <X className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-4 md:p-8 bg-white relative overflow-hidden">
                {/* Visual Content Placeholder */}
                <div className="aspect-[4/3] bg-[#D4D4D4] border-4 border-black mb-4 md:mb-6 flex flex-col items-center justify-center relative overflow-hidden group/visual">
                    {/* Subtle grid pattern inside placeholder */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                        backgroundSize: '12px 12px'
                    }} />

                    {/* Animated Scanline */}
                    <div className="absolute inset-0 w-full h-[3px] bg-black/10 z-10 animate-scanline pointer-events-none" />

                    {/* Centered Icon Content */}
                    <div className="relative z-20 flex flex-col items-center gap-4">
                        <div className="p-3 md:p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] group-hover/visual:scale-110 group-hover/visual:rotate-3 transition-transform duration-500">
                            {icon}
                        </div>
                        <div className="flex items-center gap-2">
                            <Loader2 size={12} className="animate-spin text-black/40" />
                            <span className="font-space text-[10px] md:text-xs font-bold text-black/60 uppercase tracking-widest">
                                LOADING_ASSETS...
                            </span>
                        </div>
                    </div>

                    {/* Glitch Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/visual:bg-black/5 transition-colors pointer-events-none" />
                </div>

                {/* Footer Text - Updated Typography */}
                <p className="font-space text-xs md:text-sm font-bold uppercase text-black leading-tight tracking-tight">
                    {footerText}
                </p>
            </div>
        </div>
    );
};

export const HypeShowcase: React.FC = () => {
    return (
        <section className="relative py-16 md:py-36 bg-bone overflow-hidden border-t-8 border-black">
            {/* Background Decoration: Grid Pattern - Low Opacity */}
            <div className="absolute inset-0 z-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
                backgroundSize: '30px 30px'
            }} />

            {/* Heavy Cross Marks - Lower Opacity (10%) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23000' stroke-width='3'%3E%3Cpath d='M50 40v20M40 50h20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
            }} />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="mb-16 md:mb-32 max-w-5xl">
                    <h2 className="text-4xl sm:text-5xl md:text-[9rem] font-archivo font-black leading-[0.8] mb-6 md:mb-8 text-black tracking-tighter uppercase italic">
                        O QUE VOCÊ <br />VAI VENDER.
                    </h2>
                    <div className="inline-block bg-black p-3 md:p-4 border-4 border-black shadow-[6px_6px_0px_0px_#6600FF] md:shadow-[8px_8px_0px_0px_#6600FF]">
                        <p className="font-space text-white text-base md:text-3xl uppercase tracking-tighter font-bold">
                            De infoprodutos a marcas físicas. <br className="hidden md:block" />Se tem hype, a gente cria.
                        </p>
                    </div>
                </div>

                {/* Dense Stacked Desktop View / Standard Mobile Column */}
                <div className="flex flex-col lg:block relative min-h-auto lg:min-h-[850px] space-y-12 lg:space-y-0">

                    {/* WINDOW 1: INFOPRODUTO */}
                    <div className="relative lg:absolute lg:top-0 lg:left-6 w-full lg:w-[480px] xl:w-[540px] rotate-0 lg:rotate-[-3deg] transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 hover:z-50 z-20">
                        <Window
                            title="COMMUNITY_V1.exe"
                            headerColor="#6600FF"
                            textColor="text-white"
                            footerText="Comunidades Premium & Mentorias."
                            icon={<Users className="w-8 h-8 md:w-12 md:h-12 text-black" strokeWidth={3} />}
                        />
                    </div>

                    {/* WINDOW 3: TECH/APPS */}
                    <div className="relative lg:absolute lg:top-32 lg:right-6 w-full lg:w-[500px] xl:w-[560px] rotate-0 lg:rotate-[3deg] transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 hover:z-50 z-30">
                        <Window
                            title="SAAS_LAUNCHER.bat"
                            headerColor="#000000"
                            textColor="text-white"
                            footerText="Apps, Presets & Ferramentas Digitais."
                            icon={<Cpu className="w-8 h-8 md:w-12 md:h-12 text-black" strokeWidth={3} />}
                        />
                    </div>

                    {/* WINDOW 2: FÍSICO */}
                    <div className="relative lg:absolute lg:top-64 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[460px] xl:w-[520px] rotate-0 lg:rotate-[2deg] transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 hover:z-50 z-40">
                        <Window
                            title="DROP_SUPPLEMENT.dmg"
                            headerColor="#CCFF00"
                            textColor="text-black"
                            footerText="Suplementos, Merch & Skincare."
                            icon={<Package className="w-8 h-8 md:w-12 md:h-12 text-black" strokeWidth={3} />}
                        />
                    </div>

                </div>
            </div>

            {/* Decorative Floating Sticker - UPDATED */}
            <div className="absolute top-20 right-20 animate-bounce hidden xl:block">
                <div className="bg-hyper-lime border-4 border-black p-4 rotate-12 shadow-[8px_8px_0px_0px_#000] font-archivo font-bold italic text-4xl">
                    HIGH TICKET
                </div>
            </div>
        </section>
    );
};

export default HypeShowcase;
