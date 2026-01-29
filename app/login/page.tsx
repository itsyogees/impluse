'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push('/dashboard')
    }

    return (
        <main className="min-h-screen bg-[#020C0E] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[480px] bg-[#05161A]/80 backdrop-blur-xl border border-green-500/20 rounded-[40px] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10"
            >
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="relative group mb-6">
                        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-2xl group-hover:bg-green-500/40 transition-all" />
                        <div className="relative w-20 h-20 bg-[#05161A] border border-green-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
                            <Image
                                src="/logo2.png"
                                alt="IMPULSE Logo"
                                width={56}
                                height={56}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <h1 className="font-cinzel text-3xl font-black tracking-[4px] text-green-400 mb-2">
                        IMPULSE
                    </h1>
                    <p className="text-text-secondary/70 text-sm font-medium uppercase tracking-widest">Master Your Future</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-green-400/80 uppercase tracking-widest ml-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#0A2228] border border-green-500/10 rounded-2xl px-5 py-4 text-white focus:border-green-500/50 outline-none transition-all placeholder:text-text-secondary/20"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-green-400/80 uppercase tracking-widest ml-1" htmlFor="password">
                            Security Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#0A2228] border border-green-500/10 rounded-2xl px-5 py-4 text-white focus:border-green-500/50 outline-none transition-all placeholder:text-text-secondary/20"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-black font-black py-4.5 rounded-2xl hover:bg-green-400 transition-all shadow-[0_10px_30px_rgba(34,197,94,0.2)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.3)] transform hover:-translate-y-0.5 active:scale-95 text-base uppercase tracking-wider"
                    >
                        Authorize Access
                    </button>
                </form>

                <div className="mt-10 text-center space-y-8">
                    <p className="text-text-secondary/60 text-sm font-medium">
                        {"Don't have an account?"}{' '}
                        <Link href="/register" className="text-green-400 font-bold hover:text-white transition-colors underline decoration-green-500/30 underline-offset-8">
                            Initialize Account
                        </Link>
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-text-secondary/40 text-xs font-black uppercase tracking-[3px] hover:text-green-400 transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
                        Return Home
                    </Link>
                </div>
            </motion.div>
        </main>
    )
}
