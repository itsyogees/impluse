'use client'

import DashboardPageWrapper from '@/components/ui/DashboardPageWrapper'
import { Activity, Zap, CheckCircle2 } from 'lucide-react'

export default function MyIndicatorsPage() {
    const indicators = [
        {
            name: 'Momentum Master Pro',
            status: 'Active',
            accuracy: '87%',
            signals: 156,
            profitRate: '+12.4%',
            lastSignal: '2 hours ago',
            type: 'Momentum',
            color: 'text-accent-green'
        },
        {
            name: 'Trend Prophet Elite',
            status: 'Active',
            accuracy: '92%',
            signals: 203,
            profitRate: '+18.7%',
            lastSignal: '45 mins ago',
            type: 'Trend Following',
            color: 'text-blue-400'
        },
        {
            name: 'Volume Surge Detector',
            status: 'Active',
            accuracy: '79%',
            signals: 89,
            profitRate: '+8.2%',
            lastSignal: '1 hour ago',
            type: 'Volume Analysis',
            color: 'text-purple-400'
        }
    ]

    const recentSignals = [
        { symbol: 'NIFTY', type: 'BUY', price: '21,450', time: '2 hours ago', indicator: 'Momentum Master Pro', status: 'active' },
        { symbol: 'BANKNIFTY', type: 'SELL', price: '45,320', time: '3 hours ago', indicator: 'Trend Prophet Elite', status: 'closed' },
        { symbol: 'RELIANCE', type: 'BUY', price: '2,845', time: '5 hours ago', indicator: 'Volume Surge Detector', status: 'active' },
        { symbol: 'TCS', type: 'SELL', price: '3,920', time: '6 hours ago', indicator: 'Momentum Master Pro', status: 'closed' },
    ]

    const stats = [
        { label: 'Active Indicators', value: '3', icon: <Activity className="w-6 h-6 text-accent-gold" /> },
        { label: 'Total Signals', value: '448', icon: <Zap className="w-6 h-6 text-accent-gold" /> },
        { label: 'Avg. Accuracy', value: '86%', icon: <CheckCircle2 className="w-6 h-6 text-accent-gold" /> },
    ]

    return (
        <DashboardPageWrapper title="My Indicators">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-bg-card border-2 border-border rounded-2xl p-5 md:p-6 hover:border-accent-gold transition">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-bg-secondary p-3 rounded-xl">{stat.icon}</div>
                            <span className="text-xs md:text-sm text-text-secondary uppercase tracking-wider">{stat.label}</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
                {/* Active Indicators */}
                <div className="space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Active Indicators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        {indicators.map((indicator, idx) => (
                            <div key={idx} className="bg-bg-card border-2 border-border rounded-2xl p-5 md:p-6 hover:border-accent-gold transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold mb-1">{indicator.name}</h3>
                                        <span className="text-xs md:text-sm text-text-secondary">{indicator.type}</span>
                                    </div>
                                    <span className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
                                        {indicator.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <div className="text-[10px] md:text-xs text-text-secondary mb-1">Accuracy</div>
                                        <div className="text-xl md:text-2xl font-bold text-accent-gold">{indicator.accuracy}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] md:text-xs text-text-secondary mb-1">Profit Rate</div>
                                        <div className={`text-xl md:text-2xl font-bold ${indicator.color}`}>{indicator.profitRate}</div>
                                    </div>
                                </div>

                                <div className="flex justify-between text-[10px] md:text-xs border-t border-border pt-4">
                                    <span className="text-text-secondary">Signals: <span className="text-text-primary font-semibold">{indicator.signals}</span></span>
                                    <span className="text-text-secondary">Last: <span className="text-text-primary font-semibold">{indicator.lastSignal}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Signals */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Recent Signals</h2>
                    <div className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden">
                        <div className="divide-y divide-border">
                            {recentSignals.map((signal, idx) => (
                                <div key={idx} className="p-4 md:p-6 hover:bg-bg-secondary transition">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                                <span className="font-bold text-base md:text-lg">{signal.symbol}</span>
                                                <span className={`px-3 py-1 rounded-md text-[10px] md:text-xs font-bold ${signal.type === 'BUY'
                                                    ? 'bg-accent-green/20 text-accent-green'
                                                    : 'bg-red-500/20 text-red-400'
                                                    }`}>
                                                    {signal.type}
                                                </span>
                                            </div>
                                            <div className="text-xs md:text-sm text-text-secondary">{signal.indicator}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-accent-gold text-sm md:text-base mb-1">₹{signal.price}</div>
                                            <div className="text-[10px] md:text-xs text-text-secondary">{signal.time}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {signal.status === 'active' ? (
                                            <Activity className="w-4 h-4 text-accent-green" />
                                        ) : (
                                            <CheckCircle2 className="w-4 h-4 text-text-secondary" />
                                        )}
                                        <span className={`text-[10px] md:text-xs font-semibold ${signal.status === 'active' ? 'text-accent-green' : 'text-text-secondary'
                                            }`}>
                                            {signal.status === 'active' ? 'Position Active' : 'Position Closed'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-accent-gold/10 to-transparent border-2 border-accent-gold/30 rounded-2xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Need More Indicators?</h3>
                    <p className="text-text-secondary text-sm md:text-base">Browse our marketplace for premium trading tools</p>
                </div>
                <button className="w-full md:w-auto bg-accent-gold text-bg-primary px-8 py-3 rounded-xl font-bold hover:bg-accent-gold/90 transition">
                    Explore Marketplace
                </button>
            </div>
        </DashboardPageWrapper>
    )
}
