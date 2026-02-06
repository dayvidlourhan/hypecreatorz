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

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 p-10 opacity-20 hidden md:block select-none pointer-events-none">
                <span className="text-[20vw] font-bold leading-none tracking-tighter text-neutral-800">VIP</span>
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
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
                    className="w-full max-w-md bg-neutral-900/50 border-2 border-dashed border-white p-8 md:p-10 relative overflow-hidden"
                >
                    {/* Ticket Notches (Physical Aesthetic) */}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-r-2 border-white border-dashed hidden md:block" />
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-l-2 border-white border-dashed hidden md:block" />

                    <div className="flex flex-col gap-6 font-space">
                        <div className="border-b border-neutral-700 pb-4 flex justify-between items-center">
                            <span className="text-xs uppercase text-neutral-500">TYPE</span>
                            <span className="text-sm font-bold text-[#CCFF00]">EXCLUSIVE ACCESS PASS</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-neutral-500 tracking-[0.2em] mb-1">STATUS</span>
                                <span className="text-lg font-bold tracking-tight">APLICAÇÃO RECEBIDA</span>
                            </div>

                            <div className="flex justify-between items-end gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-neutral-500 tracking-[0.2em] mb-1">DATA</span>
                                    <span className="text-lg font-bold">{currentDate}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] uppercase text-neutral-500 tracking-[0.2em] mb-1">PROTOCOL</span>
                                    <span className="text-lg font-bold text-[#CCFF00]">{protocol}</span>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Barcode */}
                        <div className="pt-6 border-t border-neutral-700 flex flex-col items-center gap-2">
                            <div className="flex gap-1 h-8 w-full opacity-60">
                                {[...Array(30)].map((_, i) => (
                                    <div key={i} className={`h-full bg-white flex-1 ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-30'}`} />
                                ))}
                            </div>
                            <span className="text-[8px] tracking-[0.5em] text-neutral-600 uppercase">Verifying_Neural_Signature...</span>
                        </div>
                    </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                    className="mt-12"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 inline-block text-center"
                    >
                        VOLTAR AO INÍCIO
                    </Link>
                </motion.div>

            </motion.div>

            {/* Industrial Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
    )
}
