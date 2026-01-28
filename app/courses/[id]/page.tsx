'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { courses } from '@/data/courses'
import { Clock, FileText, CheckCircle, ArrowLeft, PlayCircle, Star, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function CourseDetail() {
    const { id } = useParams()
    const course = courses.find((c) => c.id === id)

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-primary">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-accent-gold mb-4">Course Not Found</h1>
                    <Link href="/#courses" className="text-text-secondary hover:text-accent-gold transition flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Courses
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-bg-primary">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
                    <Link
                        href="/#courses"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition mb-6 uppercase tracking-widest text-sm font-semibold"
                    >
                        <ArrowLeft size={16} /> Back to Courses
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: Course Info */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide ${course.level === 'Beginner' ? 'bg-accent-green/20 text-accent-green' :
                                        course.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                                            'bg-red-500/20 text-red-400'
                                        }`}>
                                        {course.level}
                                    </span>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <span className="text-text-secondary text-sm ml-2">(4.9/5.0)</span>
                                    </div>
                                </div>

                                <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                    {course.title.split(' ').map((word, i) => (
                                        word === 'Mastery' || word === 'Strategies' ? <span key={i} className="text-accent-gold">{word} </span> : word + ' '
                                    ))}
                                </h1>

                                <p className="text-xl text-text-secondary mb-12 leading-relaxed max-w-3xl">
                                    {course.description}
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 p-6 bg-bg-card border border-border rounded-2xl">
                                    <div className="text-center">
                                        <Clock className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                                        <div className="text-sm text-text-secondary">Duration</div>
                                        <div className="font-bold">{course.duration}</div>
                                    </div>
                                    <div className="text-center">
                                        <FileText className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                                        <div className="text-sm text-text-secondary">Lessons</div>
                                        <div className="font-bold">{course.lessons} Total</div>
                                    </div>
                                    <div className="text-center">
                                        <PlayCircle className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                                        <div className="text-sm text-text-secondary">Format</div>
                                        <div className="font-bold">Video & Live</div>
                                    </div>
                                    <div className="text-center">
                                        <Users className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                                        <div className="text-sm text-text-secondary">Enrolled</div>
                                        <div className="font-bold">1,200+</div>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    <section>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                                            <div className="w-2 h-8 bg-accent-gold rounded-full" />
                                            What You&apos;ll Learn
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {course.syllabus.map((item, index) => (
                                                <div key={index} className="flex gap-4 p-4 bg-bg-secondary border border-border rounded-xl group hover:border-accent-gold transition">
                                                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0" />
                                                    <span className="text-text-secondary group-hover:text-text-primary transition">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Pricing & Sticky Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-bg-card border-2 border-accent-gold/30 rounded-3xl overflow-hidden shadow-2xl shadow-accent-gold/10">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <div className="text-sm text-text-secondary line-through">₹24,999</div>
                                                <div className="text-4xl font-bold text-accent-gold">{course.price}</div>
                                            </div>
                                            <div className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-md text-sm font-bold">
                                                Save 60%
                                            </div>
                                        </div>

                                        <Link
                                            href={`/enroll?courseId=${course.id}`}
                                            className="w-full bg-accent-gold text-bg-primary py-4 rounded-xl font-bold text-lg hover:bg-accent-gold/90 transition shadow-lg shadow-accent-gold/20 flex items-center justify-center gap-3 mb-6"
                                        >
                                            Enroll Now <Zap size={20} fill="currentColor" />
                                        </Link>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-sm text-text-secondary">
                                                <CheckCircle size={16} className="text-accent-green" /> 1 Year Unlimited Access
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-text-secondary">
                                                <CheckCircle size={16} className="text-accent-green" /> Certificate of Completion
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-text-secondary">
                                                <CheckCircle size={16} className="text-accent-green" /> Live Support Sessions
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-bg-card border border-border rounded-2xl p-6 text-center">
                                    <h4 className="font-bold mb-2">Need Help?</h4>
                                    <p className="text-sm text-text-secondary mb-4">Contact our student advisors for any questions.</p>
                                    <a href="https://wa.me/919876543210" target="_blank" className="text-accent-gold font-bold hover:underline">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
