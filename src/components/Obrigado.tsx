import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Obrigado() {
    const { state } = useLocation()
    const [protocol, setProtocol] = useState('')
    const [currentDate, setCurrentDate] = useState('')

    // Logic: Retrieve user name or default to CRIADOR
    const userName = state?.name?.toUpperCase() || "CRIADOR"

    useEffect(() => {
        // Generate Protocol: #HYPE-XXXX
        const randomDigits = Math.floor(1000 + Math.random() * 9000)
        setProtocol(`#HYPE-${randomDigits}`)

        // Current Date Formatting (DD/MM/YYYY)
        const date = new Date()
        const formattedDate = date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        setCurrentDate(formattedDate)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-clash overflow-hidden relative">

            {/* Background Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 p-10 opacity-10 hidden md:block select-none pointer-events-none z-0">
                <span className="text-[20vw] font-bold leading-none tracking-tighter text-neutral-800">VIP</span>
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-4xl z-10 flex flex-col items-center"
            >
                <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-center leading-tight mb-4">
                    BEM-VINDO(A) AO JOGO, <br className="md:hidden" />
                    <span className="text-[#CCFF00]">{userName}.</span>
                </h1>

                <h2 className="text-xl md:text-3xl font-medium uppercase tracking-widest text-neutral-400 mb-12 text-center">
                    SUA CONSTRUÇÃO DE PATRIMÔNIO COMEÇA AGORA.
                </h2>

                {/* The Ticket / Access Pass */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-full max-w-md bg-neutral-900 border-4 border-dashed border-[#CCFF00] p-10 md:p-12 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(204,255,0,0.15)]"
                >
                    {/* Ticket Notches (Physical Aesthetic) */}
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-r-4 border-[#CCFF00] border-dashed hidden md:block" />
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-l-4 border-[#CCFF00] border-dashed hidden md:block" />

                    <div className="flex flex-col gap-8 font-space">
                        <div className="border-b border-neutral-800 pb-5 flex justify-between items-center text-xs">
                            <span className="uppercase text-neutral-500 tracking-widest">TYPE</span>
                            <span className="font-black text-[#CCFF00] tracking-widest">EXCLUSIVE ACCESS PASS</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-neutral-500 tracking-[0.3em] mb-1">STATUS</span>
                                <span className="text-xl font-bold tracking-tight text-white">APLICAÇÃO RECEBIDA</span>
                            </div>

                            <div className="flex justify-between items-end gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-neutral-500 tracking-[0.3em] mb-1">DATA</span>
                                    <span className="text-lg font-mono text-white font-bold">{currentDate}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] uppercase text-neutral-500 tracking-[0.3em] mb-1">PROTOCOL</span>
                                    <span className="text-lg font-mono text-[#CCFF00] font-bold">{protocol}</span>
                                </div>
                            </div>
                        </div>

                        {/* High-Contrast Barcode */}
                        <div className="pt-8 border-t border-neutral-800 flex flex-col items-center gap-3">
                            <div className="flex gap-1.5 h-10 w-full">
                                {[...Array(24)].map((_, i) => (
                                    <div key={i} className={`h-full bg-white flex-1 ${i % 3 === 0 ? 'w-2 bg-[#CCFF00]' : 'w-[1px] opacity-100'}`} />
                                ))}
                            </div>
                            <span className="text-[9px] font-mono tracking-[0.5em] text-neutral-500 uppercase">ACCESS_GRANTED_SECURE_LINK</span>
                        </div>
                    </div>
                </motion.div>

                {/* Action Button: Solid Block Styling */}
                <motion.div
                    className="mt-16"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        className="px-12 py-5 bg-white text-black font-black uppercase tracking-[0.25em] transition-all duration-300 inline-block text-center border-4 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] hover:shadow-none"
                    >
                        VOLTAR AO INÍCIO
                    </Link>
                </motion.div>

            </motion.div>

            {/* Industrial Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
    )
}
