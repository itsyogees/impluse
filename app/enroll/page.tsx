'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { courses } from '@/data/courses'
import { Rocket, ArrowLeft, ShieldCheck, MessageCircle, ChevronDown } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

function EnrollmentFormContent() {
    const searchParams = useSearchParams()
    const initialCourseId = searchParams.get('courseId') || ''

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        market: '',
        style: '',
        segment: '',
        experience: '',
        product: initialCourseId
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Enrollment Data:', formData)
        setIsSubmitted(true)
        // Here you would typically send data to an API or WhatsApp
    }

    const inputClasses = "w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 focus:border-accent-gold focus:outline-none transition-all appearance-none text-text-primary"

    return (
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-bg-card border-2 border-border rounded-3xl overflow-hidden shadow-2xl">
            {/* Sidebar Info */}
            <div className="bg-bg-secondary p-8 lg:p-12 flex flex-col justify-between border-r border-border">
                <div>
                    <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6">
                        <Rocket size={32} className="text-accent-gold" />
                    </div>
                    <h1 className="font-cinzel text-3xl font-bold mb-6">
                        Enrollment <span className="text-accent-gold">Form</span>
                    </h1>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                        Complete the form and get instant access to our premium trading tools and institutional-grade education.
                    </p>

                    <ul className="space-y-4">
                        {[
                            'Instant Course Access',
                            'Premium Indicators Pro',
                            'Discord Community Access',
                            'Weekly Live Q&A Sessions'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                                <ShieldCheck size={18} className="text-accent-green" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-card bg-bg-secondary flex items-center justify-center overflow-hidden">
                                    <Image src={`/course${i}.png`} alt="User" width={32} height={32} className="object-cover" />
                                </div>
                            ))}
                        </div>
                        <p>Joined by 15,000+ traders</p>
                    </div>
                </div>
            </div>

            {/* Form Area */}
            <div className="p-8 lg:p-12">
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                                className={inputClasses}
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-secondary border-r border-border pr-3">+91</span>
                                <input
                                    type="tel"
                                    placeholder="XXXXX XXXXX"
                                    required
                                    pattern="[0-9]{10}"
                                    className={`${inputClasses} pl-16`}
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="relative">
                                <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Select Market</label>
                                <select
                                    className={inputClasses}
                                    required
                                    value={formData.market}
                                    onChange={e => setFormData({ ...formData, market: e.target.value })}
                                >
                                    <option value="">Select</option>
                                    <option value="equity">Equity</option>
                                    <option value="fno">F&O</option>
                                    <option value="commodity">Commodity</option>
                                    <option value="forex">Forex / Crypto</option>
                                </select>
                                <ChevronDown className="absolute right-4 bottom-4 text-text-secondary pointer-events-none" size={18} />
                            </div>

                            <div className="relative">
                                <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Select Style</label>
                                <select
                                    className={inputClasses}
                                    required
                                    value={formData.style}
                                    onChange={e => setFormData({ ...formData, style: e.target.value })}
                                >
                                    <option value="">Select</option>
                                    <option value="scalper">Scalping</option>
                                    <option value="intraday">Intraday</option>
                                    <option value="swing">Swing Trading</option>
                                    <option value="positional">Positional</option>
                                </select>
                                <ChevronDown className="absolute right-4 bottom-4 text-text-secondary pointer-events-none" size={18} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="relative">
                                <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Select Segment</label>
                                <select
                                    className={inputClasses}
                                    required
                                    value={formData.segment}
                                    onChange={e => setFormData({ ...formData, segment: e.target.value })}
                                >
                                    <option value="">Select</option>
                                    <option value="cash">Cash</option>
                                    <option value="futures">Futures</option>
                                    <option value="options">Options</option>
                                </select>
                                <ChevronDown className="absolute right-4 bottom-4 text-text-secondary pointer-events-none" size={18} />
                            </div>

                            <div className="relative">
                                <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Experience</label>
                                <select
                                    className={inputClasses}
                                    required
                                    value={formData.experience}
                                    onChange={e => setFormData({ ...formData, experience: e.target.value })}
                                >
                                    <option value="">Select</option>
                                    <option value="0-1">0-1 Year</option>
                                    <option value="1-3">1-3 Years</option>
                                    <option value="3-5">3-5 Years</option>
                                    <option value="5+">5+ Years</option>
                                </select>
                                <ChevronDown className="absolute right-4 bottom-4 text-text-secondary pointer-events-none" size={18} />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">Select Product</label>
                            <select
                                className={inputClasses}
                                required
                                value={formData.product}
                                onChange={e => setFormData({ ...formData, product: e.target.value })}
                            >
                                <option value="">Select Product/Course</option>
                                {courses.map(course => (
                                    <option key={course.id} value={course.id}>{course.title}</option>
                                ))}
                                <option value="indicators-pro">Indicators Pro Suite</option>
                            </select>
                            <ChevronDown className="absolute right-4 bottom-4 text-text-secondary pointer-events-none" size={18} />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-accent-gold text-bg-primary py-4 rounded-xl font-bold text-lg hover:bg-accent-gold/90 transition shadow-lg shadow-accent-gold/20 flex items-center justify-center gap-3 mt-4"
                        >
                            Confirm Enrollment <Rocket size={20} fill="currentColor" />
                        </button>
                    </form>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                        <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center">
                            <ShieldCheck size={40} className="text-accent-green" />
                        </div>
                        <h2 className="text-3xl font-bold">Request Received!</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Thanks for enrolling, {formData.name}. Our expert advisors will contact you shortly on your provided phone number.
                        </p>
                        <Link
                            href="/"
                            className="px-8 py-3 bg-accent-gold text-bg-primary rounded-xl font-bold transition"
                        >
                            Return Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function EnrollmentPage() {
    return (
        <div className="min-h-screen bg-bg-primary">
            <Navigation />

            <main className="pt-32 pb-24 px-6 sm:px-8 bg-[url('/grid-pattern.svg')]">
                <div className="max-w-[1400px] mx-auto">
                    <Link
                        href="/#courses"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition mb-12 uppercase tracking-widest text-sm font-semibold"
                    >
                        <ArrowLeft size={16} /> Cancel Enrollment
                    </Link>

                    <Suspense fallback={<div className="text-center text-accent-gold py-24">Loading Enrollment Form...</div>}>
                        <EnrollmentFormContent />
                    </Suspense>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 opacity-50">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <ShieldCheck size={16} /> 256-bit SSL Encrypted
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <MessageCircle size={16} /> 24/7 Priority Support
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
