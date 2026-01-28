import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, CheckCircle2 } from 'lucide-react'
import { courses } from '@/data/courses'

export default function Courses() {

  return (
    <section id="courses" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm text-accent-gold uppercase tracking-[4px] mb-4 font-bold">Expert Education</div>
          <h2 className="font-cinzel text-5xl md:text-6xl font-black mb-8">
            Trading <span className="text-accent-gold">Courses</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[700px] mx-auto leading-relaxed">
            Comprehensive programs designed by professional traders to elevate your skills to an institutional level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-accent-gold transition-all duration-500 group flex flex-col shadow-xl hover:shadow-accent-gold/5"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${course.level === 'All Levels' ? 'bg-accent-green text-bg-primary' :
                      course.level === 'Intermediate' ? 'bg-blue-500 text-white' :
                        course.level === 'Advanced' ? 'bg-red-500 text-white' :
                          'bg-purple-600 text-white'
                    }`}>
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent-gold transition-colors leading-tight min-h-[3rem]">
                  {course.title}
                </h3>

                <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5 text-xs font-bold uppercase tracking-wider text-text-secondary">
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent-gold" /> {course.duration}</span>
                  <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent-gold" /> {course.students}</span>
                </div>

                <div className="mb-8">
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent-gold mb-4">Key Modules</div>
                  <ul className="space-y-3">
                    {course.syllabus.slice(0, 5).map((module, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-text-secondary font-medium">
                        <CheckCircle2 className="w-4 h-4 text-accent-green/60" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/enroll?courseId=${course.id}`}
                  className="mt-auto w-full bg-accent-gold text-bg-primary py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl shadow-accent-gold/20 text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
