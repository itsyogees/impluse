import Image from 'next/image'
import Link from 'next/link'
import { Clock, FileText } from 'lucide-react'
import { courses } from '@/data/courses'

export default function Courses() {

  return (
    <section id="courses" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Learn & Grow</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Trading <span className="text-accent-gold">Courses</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Structured programs to take you from beginner to expert trader
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-accent-gold transition group flex flex-col"
            >
              <Link href={`/courses/${course.id}`} className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 to-transparent opacity-60" />
              </Link>

              <div className="p-6 flex-1 flex flex-col">
                <Link href={`/courses/${course.id}`}>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent-gold transition">
                    {course.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-accent-gold" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><FileText className="w-4 h-4 text-accent-gold" /> {course.lessons} Lessons</span>
                </div>

                <div className="flex items-center justify-between mb-6 mt-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.level === 'Beginner' ? 'bg-accent-green/20 text-accent-green' :
                    course.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                    {course.level}
                  </span>
                  <span className="text-2xl font-bold text-accent-gold">{course.price}</span>
                </div>

                <Link
                  href={`/enroll?courseId=${course.id}`}
                  className="w-full bg-accent-gold text-bg-primary py-3 rounded-md font-bold hover:bg-accent-gold/90 transition shadow-lg shadow-accent-gold/10 text-center"
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
