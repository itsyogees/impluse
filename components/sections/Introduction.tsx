'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Zap, BarChart3, Bell } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Introduction() {
    const features = [
        { icon: <BarChart3 className="w-5 h-5" />, text: 'Real-time market analysis' },
        { icon: <ShieldCheck className="w-5 h-5" />, text: 'No repaint signals for accurate entries' },
        { icon: <Zap className="w-5 h-5" />, text: 'Works on all timeframes' },
        { icon: <Bell className="w-5 h-5" />, text: 'Instant alert notifications' },
    ]

    return (
        <section id="introduction" className="py-20 px-6 relative overflow-hidden bg-bg-primary">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-cinzel text-[3rem] font-bold uppercase tracking-[3px] text-accent-green select-none drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                        Introduction
                    </h2>
                    <div className="relative mt-2">
                        <div className="h-[1.5px] w-8 bg-accent-green mx-auto shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side: Video/Image Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-2 border-border bg-bg-card shadow-2xl group-hover:border-accent-gold/50 transition-all duration-500">
                            <Image
                                src="/intro.jpg"
                                alt="IMPULSE Trading Introduction"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />



                            {/* Floating Label */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-accent-gold mb-1">Live Performance</p>
                                    <p className="text-sm font-bold">HULK SCALPER KING v2.0</p>
                                </div>
                                <div className="px-3 py-1 bg-accent-green/20 text-accent-green rounded-full text-[10px] font-black uppercase tracking-widest">Live</div>
                            </div>
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-gold/20 rounded-full -z-10 animate-pulse" />
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-accent-gold/10 rounded-full -z-10" />
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full mb-6">
                                <Zap className="w-4 h-4 text-accent-gold" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold">Featured Indicator</span>
                            </div>
                            <h3 className="font-cinzel text-3xl md:text-5xl font-black mb-4 leading-tight">
                                HULK SCALPER <span className="text-accent-gold">KING</span>
                            </h3>
                            <p className="text-xl font-bold text-text-primary/90">
                                Unleash the Power of Professional Trading
                            </p>
                        </div>

                        <p className="text-text-secondary leading-relaxed text-lg">
                            Our premium indicators are designed to give you an edge in the market. With <span className="text-accent-gold font-bold">78% accuracy signals</span> and no-repaint technology, you can trade with confidence across all asset classes.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-bg-card border border-border rounded-2xl hover:border-accent-gold/30 transition-colors group/item">
                                    <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-gold group-hover/item:bg-accent-gold group-hover/item:text-bg-primary transition-all shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <span className="text-sm font-bold text-text-secondary group-hover/item:text-text-primary transition-colors">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link
                                href="/enroll?product=hulk-scalper"
                                className="inline-flex items-center gap-3 bg-accent-gold text-bg-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-accent-gold/20 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                Book Free Demo <Zap size={18} fill="currentColor" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
