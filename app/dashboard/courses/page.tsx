'use client'

import DashboardPageWrapper from '@/components/ui/DashboardPageWrapper'
import { Clock, FileText, PlayCircle, CheckCircle2, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function MyCoursesPage() {
    const enrolledCourses = [
        {
            id: 'tech-analysis',
            title: 'Technical Analysis Fundamentals',
            instructor: 'Michael Chen',
            duration: '4 Weeks',
            totalLessons: 18,
            completedLessons: 12,
            progress: 67,
            nextLesson: 'Fibonacci Retracement Strategies',
            image: '/course1.png'
        },
        {
            id: 'intraday-mastery',
            title: 'Intraday Trading Mastery',
            instructor: 'Sarah Williams',
            duration: '8 Weeks',
            totalLessons: 32,
            completedLessons: 8,
            progress: 25,
            nextLesson: 'Opening Range Breakout',
            image: '/course3.png'
        },
        {
            id: 'options-strategies',
            title: 'Options Trading Strategies',
            instructor: 'David Kumar',
            duration: '6 Weeks',
            totalLessons: 28,
            completedLessons: 15,
            progress: 54,
            nextLesson: 'Iron Condor Setup',
            image: '/course4.png'
        }
    ]

    const stats = [
        { label: 'Courses Enrolled', value: '3', icon: <FileText className="w-6 h-6 text-accent-gold" /> },
        { label: 'Avg. Progress', value: '49%', icon: <TrendingUp className="w-6 h-6 text-accent-gold" /> },
        { label: 'Lessons Completed', value: '35', icon: <CheckCircle2 className="w-6 h-6 text-accent-gold" /> },
    ]

    return (
        <DashboardPageWrapper title="My Courses">
            {/* Stats Overview */}
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

            {/* Course List */}
            <div className="space-y-6">
                {enrolledCourses.map((course) => (
                    <div key={course.id} className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-accent-gold transition group">
                        <div className="flex flex-col md:flex-row gap-6 p-5 md:p-6">
                            {/* Course Image */}
                            <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                                <div className="aspect-video md:aspect-square bg-bg-secondary rounded-xl overflow-hidden relative">
                                    <Image src={course.image} alt={course.title} fill className="object-cover" />
                                </div>
                            </div>

                            {/* Course Info */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="mb-4">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent-gold transition leading-tight">{course.title}</h3>
                                        <span className="sm:hidden text-xs text-text-secondary">Instructor: {course.instructor}</span>
                                    </div>
                                    <p className="hidden sm:block text-text-secondary text-sm mb-4">Instructor: {course.instructor}</p>

                                    <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-text-secondary mb-4">
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-accent-gold" /> {course.duration}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-accent-gold" /> {course.completedLessons}/{course.totalLessons} Lessons
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex justify-between text-xs md:text-sm mb-2">
                                            <span className="text-text-secondary">Progress</span>
                                            <span className="font-bold text-accent-gold">{course.progress}%</span>
                                        </div>
                                        <div className="w-full bg-bg-secondary rounded-full h-2 md:h-3">
                                            <div
                                                className="bg-accent-gold rounded-full h-2 md:h-3 transition-all duration-500"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-xs md:text-sm min-w-0">
                                        <PlayCircle className="w-4 h-4 text-accent-gold flex-shrink-0" />
                                        <span className="text-text-secondary truncate">Next: <span className="text-text-primary font-semibold">{course.nextLesson}</span></span>
                                    </div>

                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="w-full sm:w-auto bg-accent-gold text-bg-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-accent-gold/90 transition shadow-lg shadow-accent-gold/20 text-center text-sm md:text-base"
                                    >
                                        Continue Learning
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Browse More CTA */}
            <div className="mt-12 bg-gradient-to-r from-accent-gold/10 to-transparent border-2 border-accent-gold/30 rounded-2xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Learn More?</h3>
                    <p className="text-text-secondary text-sm md:text-base">Explore our full catalog of premium trading courses</p>
                </div>
                <Link
                    href="/#courses"
                    className="w-full md:w-auto text-center bg-accent-gold text-bg-primary px-8 py-3 rounded-xl font-bold hover:bg-accent-gold/90 transition"
                >
                    Browse All Courses
                </Link>
            </div>
        </DashboardPageWrapper>
    )
}
