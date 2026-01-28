'use client'

import DashboardPageWrapper from '@/components/ui/DashboardPageWrapper'
import { CreditCard, Download, CheckCircle2, Calendar, Crown } from 'lucide-react'

export default function BillingPage() {
    const currentPlan = {
        name: 'Premium All-Access',
        price: '₹4,999',
        period: 'month',
        nextBilling: '28 Feb 2026',
        features: [
            'Unlimited course access',
            'All premium indicators',
            'Priority support',
            'Community access',
            'Live trading sessions',
            'Exclusive webinars'
        ]
    }

    const paymentMethods = [
        {
            type: 'Credit Card',
            last4: '4242',
            brand: 'Visa',
            expiry: '12/26',
            isDefault: true
        },
        {
            type: 'UPI',
            id: 'john@paytm',
            isDefault: false
        }
    ]

    const invoices = [
        { date: '28 Jan 2026', amount: '₹4,999', status: 'Paid', invoice: 'INV-2026-001' },
        { date: '28 Dec 2025', amount: '₹4,999', status: 'Paid', invoice: 'INV-2025-012' },
        { date: '28 Nov 2025', amount: '₹4,999', status: 'Paid', invoice: 'INV-2025-011' },
        { date: '28 Oct 2025', amount: '₹4,999', status: 'Paid', invoice: 'INV-2025-010' },
        { date: '28 Sep 2025', amount: '₹4,999', status: 'Paid', invoice: 'INV-2025-009' }
    ]


    return (
        <DashboardPageWrapper title="Billing">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                    {/* Current Plan */}
                    <div className="bg-gradient-to-br from-accent-gold/10 to-transparent border-2 border-accent-gold rounded-2xl overflow-hidden">
                        <div className="p-5 md:p-8">
                            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-6">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-bg-secondary p-2 rounded-lg">
                                            <Crown className="w-6 h-6 md:w-8 md:h-8 text-accent-gold" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold truncate">{currentPlan.name}</h2>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl md:text-4xl font-bold text-accent-gold">{currentPlan.price}</span>
                                        <span className="text-xs md:text-sm text-text-secondary">/{currentPlan.period}</span>
                                    </div>
                                </div>
                                <span className="bg-accent-green/20 text-accent-green px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-accent-green/30">
                                    Active Plan
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {currentPlan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                                        <span className="text-sm text-text-primary/90">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 pt-6 border-t border-accent-gold/30">
                                <Calendar className="w-5 h-5 text-accent-gold" />
                                <span className="text-sm text-text-secondary">
                                    Next billing date: <span className="font-bold text-text-primary">{currentPlan.nextBilling}</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden">
                        <div className="p-5 md:p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <h2 className="text-xl md:text-2xl font-bold">Payment Methods</h2>
                            <button className="w-full sm:w-auto bg-accent-gold text-bg-primary px-6 py-2 rounded-xl font-bold hover:bg-accent-gold/90 transition text-sm">
                                Add New Method
                            </button>
                        </div>
                        <div className="p-5 md:p-6 space-y-4">
                            {paymentMethods.map((method, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-bg-secondary rounded-xl gap-4 border border-border/50">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-accent-gold" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="font-bold text-sm md:text-base truncate">
                                                {method.type} {method.last4 && `•••• ${method.last4}`}
                                            </div>
                                            <div className="text-[10px] md:text-xs text-text-secondary truncate">
                                                {method.brand && `${method.brand} • Expires ${method.expiry}`}
                                                {method.id && method.id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-border/50">
                                        {method.isDefault && (
                                            <span className="bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border border-accent-gold/30">
                                                Default
                                            </span>
                                        )}
                                        <button className="text-sm text-text-secondary hover:text-accent-gold transition font-bold">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Invoice History */}
                    <div className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden">
                        <div className="p-5 md:p-6 border-b border-border">
                            <h2 className="text-xl md:text-2xl font-bold">Invoice History</h2>
                        </div>
                        <div className="overflow-x-auto scrollbar-hide">
                            <table className="w-full">
                                <thead className="bg-bg-secondary">
                                    <tr>
                                        <th className="px-5 md:px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Date</th>
                                        <th className="px-5 md:px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Invoice</th>
                                        <th className="hidden sm:table-cell px-5 md:px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Amount</th>
                                        <th className="px-5 md:px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
                                        <th className="px-5 md:px-6 py-4 text-right text-xs font-bold text-text-secondary uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {invoices.map((invoice, idx) => (
                                        <tr key={idx} className="hover:bg-bg-secondary transition group">
                                            <td className="px-5 md:px-6 py-4 text-xs md:text-sm whitespace-nowrap">{invoice.date}</td>
                                            <td className="px-5 md:px-6 py-4 font-mono text-xs md:text-sm whitespace-nowrap">{invoice.invoice}</td>
                                            <td className="hidden sm:table-cell px-5 md:px-6 py-4 font-bold text-sm whitespace-nowrap">{invoice.amount}</td>
                                            <td className="px-5 md:px-6 py-4 whitespace-nowrap">
                                                <span className="bg-accent-green/10 text-accent-green border border-accent-green/20 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                    {invoice.status}
                                                </span>
                                            </td>
                                            <td className="px-5 md:px-6 py-4 text-right">
                                                <button className="inline-flex items-center gap-1.5 text-accent-gold font-bold hover:underline py-1 text-xs md:text-sm whitespace-nowrap">
                                                    <Download className="w-3.5 h-3.5" />
                                                    <span className="hidden sm:inline">Download</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6 md:space-y-8">
                    {/* Billing Summary */}
                    <div className="bg-bg-card border-2 border-border rounded-2xl p-5 md:p-6">
                        <h3 className="text-lg font-bold mb-6">Billing Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs md:text-sm text-text-secondary">Current Plan</span>
                                <span className="font-bold text-sm md:text-base">{currentPlan.price}/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs md:text-sm text-text-secondary">Tax (18% GST)</span>
                                <span className="font-bold text-sm md:text-base">₹900</span>
                            </div>
                            <div className="border-t border-border pt-4 flex justify-between items-center">
                                <span className="font-bold text-sm md:text-base text-text-primary">Total Amount</span>
                                <span className="text-xl md:text-2xl font-bold text-accent-gold">₹5,899</span>
                            </div>
                        </div>
                    </div>

                    {/* Upgrade Options */}
                    <div className="bg-bg-card border-2 border-border rounded-2xl p-5 md:p-6 border-accent-green/20">
                        <h3 className="text-lg font-bold mb-4">Save with Annual Plan</h3>
                        <div className="bg-accent-green/10 border border-accent-green/20 rounded-xl p-4 mb-6">
                            <div className="text-2xl font-bold text-accent-green mb-1">Save 20%</div>
                            <div className="text-xs text-text-secondary leading-relaxed">Pay annually and get 2 months free subscription.</div>
                        </div>
                        <button className="w-full bg-accent-gold text-bg-primary py-3.5 rounded-xl font-bold hover:bg-accent-gold/90 transition shadow-lg shadow-accent-gold/20 text-sm md:text-base">
                            Switch to Annual
                        </button>
                    </div>

                    {/* Support */}
                    <div className="bg-gradient-to-br from-accent-gold/10 to-transparent border-2 border-accent-gold/30 rounded-2xl p-5 md:p-8">
                        <h3 className="font-bold text-lg mb-2">Billing Support</h3>
                        <p className="text-xs md:text-sm text-text-secondary mb-6 leading-relaxed">
                            Need help with your subscription or payment method?
                        </p>
                        <button className="w-full bg-bg-card border-2 border-border py-3 rounded-xl font-bold hover:border-accent-gold transition text-xs md:text-sm">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </DashboardPageWrapper>
    )
}
