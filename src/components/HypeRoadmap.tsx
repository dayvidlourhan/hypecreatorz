import { ScanFace, FlaskConical, Rocket } from 'lucide-react';

const RoadmapStep = ({ phase, title, text, icon: Icon, accentColor, isLeft, badgeColor, textColor = "text-black", rotation, connectorBg, dotColor }: any) => {
    return (
        <div className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full mb-16 md:mb-32 last:mb-16 relative pl-12 md:pl-0`}>

            {/* Horizontal Connector Arm (Desktop only) - HEAVY INDUSTRY BEAM */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-3 bg-black z-0 
        ${isLeft ? 'right-1/2 w-[calc(50%-180px)]' : 'left-1/2 w-[calc(50%-180px)]'}`}
            />

            {/* Content Side */}
            <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? 'md:justify-end md:pr-24' : 'md:justify-start md:pl-24'}`}>
                <div className={`max-w-md w-full p-6 md:p-8 border-4 border-b-[8px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none group relative ${rotation} md:${rotation} z-10`}>
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className={`p-3 md:p-4 border-4 border-black ${accentColor} shadow-[4px_4px_0px_0px_#000] -rotate-3 group-hover:rotate-0 transition-transform`}>
                            <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                        </div>
                        <div className={`px-4 py-1 text-xs md:text-sm font-space font-black border-4 border-black ${badgeColor} ${textColor} tracking-widest uppercase rotate-2`}>
                            {phase}
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-archivo mb-3 md:mb-4 leading-none uppercase italic underline decoration-hyper-lime decoration-4 md:decoration-8 underline-offset-4">
                        {title}
                    </h3>

                    <p className="font-space text-base md:text-lg leading-tight font-bold text-black uppercase">
                        {text}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black" />
                </div>
            </div>

            {/* Center Node (Beefed Up Diamond) */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
                <div className={`w-10 h-10 md:w-16 md:h-16 border-4 border-black bg-white rotate-45 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] md:shadow-[6px_6px_0px_0px_#000]`}>
                    <div className={`w-6 h-6 md:w-10 md:h-10 border-[3px] md:border-4 border-black ${connectorBg || accentColor} flex items-center justify-center`}>
                        <div className={`w-2 h-2 md:w-4 md:h-4 ${dotColor || 'bg-black'}`} />
                    </div>
                </div>
            </div>

            {/* Empty Side (Desktop) */}
            <div className="hidden md:block md:w-1/2" />
        </div>
    );
};

const HypeRoadmap = () => {
    return (
        <section className="relative py-16 md:py-32 px-6 bg-bone overflow-hidden min-h-screen">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-24 md:mb-40 relative z-10 px-2">
                <div className="inline-block bg-black text-white px-4 md:px-6 py-1 md:py-2 border-4 border-black font-space font-black mb-6 md:mb-8 rotate-[-1deg] uppercase tracking-tighter shadow-brutal text-sm md:text-base">
                    O CAMINHO DO PRODUTOR
                </div>
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-archivo leading-[0.8] mb-6 md:mb-8 tracking-tighter uppercase">
                    COMO <br />
                    <span className="text-white [text-shadow:2px_2px_0px_#000,-2px_-2px_0px_#000,2px_-2px_0px_#000,-2px_2px_0px_#000] md:[text-shadow:4px_4px_0px_#000,-4px_-4px_0px_#000,4px_-4px_0px_#000,-4px_4px_0px_#000] bg-hyper-lime px-3 md:px-4 py-1 md:py-2 border-4 border-black inline-block -rotate-2">
                        FUNCIONA.
                    </span>
                </h2>
                <p className="font-space text-lg md:text-4xl uppercase font-black tracking-tight max-w-2xl mx-auto leading-none mt-8 md:mt-12">
                    <span className="bg-[#CCFF00] px-4 py-2 border-2 border-black inline-block -rotate-1 shadow-[4px_4px_0px_0px_#000]">
                        Do zero ao seu produto no ar em 3 etapas.
                    </span>
                </p>
            </div>

            {/* Timeline Container */}
            <div className="max-w-7xl mx-auto relative px-2 md:px-4">

                {/* Central Path (THE BACKBONE PIPE) - Solid Thick Line */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-24 w-1 md:w-3 bg-black z-0" />

                {/* Steps */}
                <div className="relative flex flex-col items-center">
                    <RoadmapStep
                        phase="PHASE_01"
                        title="O CRIVO."
                        text="Você aplica. Nossa IA analisa o fit da sua audiência. Se tiver potencial, você entra para o time."
                        icon={ScanFace}
                        accentColor="bg-electric-purple text-white"
                        badgeColor="bg-electric-purple"
                        textColor="text-white"
                        isLeft={true}
                        rotation="rotate-[-1deg]"
                    />

                    <RoadmapStep
                        phase="PHASE_02"
                        title="O LABORATÓRIO."
                        text="Nós desenvolvemos o produto, a oferta e a tecnologia. Você só aprova o que a gente cria."
                        icon={FlaskConical}
                        accentColor="bg-hyper-lime text-black"
                        badgeColor="bg-hyper-lime"
                        textColor="text-black"
                        isLeft={false}
                        rotation="rotate-[1deg]"
                    />

                    <RoadmapStep
                        phase="PHASE_03"
                        title="O LANÇAMENTO."
                        text="Você posta. A audiência compra. O dinheiro cai na conta. Repetimos o ciclo."
                        icon={Rocket}
                        accentColor="bg-electric-purple text-white"
                        badgeColor="bg-electric-purple"
                        textColor="text-white"
                        isLeft={true}
                        rotation="rotate-[-0.5deg]"
                        connectorBg="bg-electric-purple"
                    />
                </div>
            </div>


            {/* Decorative Textures */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-black/5 -z-10" />
            <div className="absolute top-0 right-0 w-1/4 h-full bg-hyper-lime/5 -z-10 skew-x-12" />

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 border-8 border-black bg-hyper-lime rotate-12 -z-10 opacity-20" />
            <div className="absolute bottom-20 left-10 w-48 h-48 border-8 border-black bg-electric-purple -rotate-12 -z-10 opacity-20" />
        </section>
    );
};

export default HypeRoadmap;
