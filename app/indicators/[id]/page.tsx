'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import {
    ChevronLeft,
    Star,
    Zap,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    ShieldCheck
} from 'lucide-react'

interface IndicatorInfo {
    name: string;
    tagline: string;
    price: string;
    rating: number;
    category: string;
    description: string;
    features: string[];
    highlight: string;
}

// Simple Mock Data
const indicatorData: Record<string, IndicatorInfo> = {
    'quantum-scalper': {
        name: 'Quantum Scalper Pro',
        tagline: 'Precision entries for high-frequency trading.',
        price: '₹4,999',
        rating: 4.8,
        category: 'Indicators',
        description: 'The Quantum Scalper Pro uses advanced AI algorithms to identify micro-trends in real-time. Designed for traders who need fast, accurate signals in volatile markets.',
        features: [
            'Real-time Entry & Exit Signals',
            'Advanced Volume Analysis',
            'Multi-Timeframe Dashboard',
            'Instant Mobile Notifications'
        ],
        highlight: '82% Success Rate'
    },
    'momentum-master': {
        name: 'Momentum Master',
        tagline: 'Ride the wave with institutional precision.',
        price: '₹2,999',
        rating: 4.6,
        category: 'Indicators',
        description: 'Track big money moves and momentum shifts. Momentum Master helps you stay on the right side of the trend with automated divergence detection.',
        features: [
            'Trend Strength Indicator',
            'Automated Divergence Detection',
            'Institutional Flow Tracking',
            'Custom Alert System'
        ],
        highlight: '1.7x Profit Factor'
    },
    'trend-prophet': {
        name: 'Trend Prophet',
        tagline: 'Predict major market shifts before they happen.',
        price: '₹4,999',
        rating: 4.9,
        category: 'Indicators',
        description: 'A comprehensive trend prediction tool that combines multiple technical indicators into one easy-to-read signal system.',
        features: [
            'Early Trend Detection',
            'Support & Resistance Zones',
            'Volatility Adjusted Stops',
            'Pattern Recognition Engine'
        ],
        highlight: '900+ Pips Monthly'
    },
    'volume-wizard': {
        name: 'Volume Wizard',
        tagline: 'See the market volume like never before.',
        price: '₹3,499',
        rating: 4.7,
        category: 'Indicators',
        description: 'Uncover hidden market volume and institutional block trades. Volume Wizard gives you a clear view of where the smart money is moving.',
        features: [
            'Volume Profile Display',
            'Block Trade Detection',
            'Cumulative Delta Tracking',
            'Price-Volume Divergence'
        ],
        highlight: 'Smart Money Tracking'
    }
}

export default function IndicatorDetails() {
    const params = useParams()
    const router = useRouter()
    const id = params.id as string

    const data = indicatorData[id] || indicatorData['quantum-scalper']

    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            <Navigation />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Back Link */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-text-secondary hover:text-accent-gold transition mb-10 group"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Back to Browse</span>
                    </button>

                    <div className="bg-bg-card border-2 border-border rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-5">
                            {/* Left Side: Visual/Hero */}
                            <div className="lg:col-span-2 bg-bg-secondary p-12 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent-gold/5 blur-[80px]" />
                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-accent-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8 ring-1 ring-accent-gold/20 shadow-inner">
                                        <Zap className="w-12 h-12 text-accent-gold" />
                                    </div>
                                    <h1 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 leading-tight">{data.name}</h1>
                                    <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/30 px-4 py-1.5 rounded-full text-xs text-accent-gold font-bold uppercase tracking-widest mb-6">
                                        {data.category}
                                    </div>
                                    <div className="text-4xl font-black text-white mb-2">{data.price}</div>
                                    <div className="text-xs text-text-secondary uppercase tracking-[0.2em]">One-Time Access</div>
                                </div>
                            </div>

                            {/* Right Side: Details */}
                            <div className="lg:col-span-3 p-8 md:p-12 space-y-10">
                                <div>
                                    <h2 className="text-xl font-bold text-accent-gold mb-3 uppercase tracking-wider">{data.tagline}</h2>
                                    <p className="text-text-secondary leading-relaxed text-lg">
                                        {data.description}
                                    </p>
                                </div>

                                {/* Key Highlights Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-bg-secondary p-6 rounded-2xl border border-border flex items-center gap-4">
                                        <div className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-accent-green" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold">{data.highlight}</div>
                                            <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">Performance</div>
                                        </div>
                                    </div>
                                    <div className="bg-bg-secondary p-6 rounded-2xl border border-border flex items-center gap-4">
                                        <div className="w-10 h-10 bg-accent-gold/10 rounded-xl flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-accent-gold" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold">Safe Entry</div>
                                            <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">Reliability</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-accent-gold rounded-full" />
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {data.features.map((feature: string, i: number) => (
                                            <div key={i} className="flex items-center gap-3 text-text-secondary">
                                                <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0" />
                                                <span className="font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Buy Button */}
                                <div className="pt-6 border-t border-border">
                                    <Link
                                        href={`/enroll?product=${id}`}
                                        className="w-full bg-accent-gold text-bg-primary py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-accent-gold/20 hover:scale-[1.02] transition active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        Enroll Now <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <div className="text-center mt-6 flex items-center justify-center gap-2 text-text-secondary text-sm">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="font-bold text-text-primary text-base">{data.rating}</span>
                                        <span>/ 5.0 Rating based on user reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="mt-12 p-8 bg-bg-secondary/30 rounded-3xl border border-border text-center">
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Need help setting up? Every purchase includes a comprehensive setup guide and 24/7 priority support from our technical team.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
