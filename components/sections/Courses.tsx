import { BookOpen, BarChart3, Zap, Target, Briefcase, Search, Clock, FileText } from 'lucide-react'

export default function Courses() {
  const courses = [
    {
      icon: <BookOpen className="w-16 h-16 text-accent-gold mx-auto" />,
      title: 'Technical Analysis Fundamentals',
      duration: '4 Weeks',
      level: 'Beginner',
      lessons: 18,
      price: '₹9,999'
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-accent-gold mx-auto" />,
      title: 'Advanced Chart Patterns',
      duration: '6 Weeks',
      level: 'Intermediate',
      lessons: 24,
      price: '₹14,999'
    },
    {
      icon: <Zap className="w-16 h-16 text-accent-gold mx-auto" />,
      title: 'Intraday Trading Mastery',
      duration: '8 Weeks',
      level: 'Advanced',
      lessons: 32,
      price: '₹19,999'
    },
    {
      icon: <Target className="w-16 h-16 text-accent-gold mx-auto" />,
      title: 'Options Trading Strategies',
      duration: '6 Weeks',
      level: 'Intermediate',
      lessons: 28,
      price: '₹16,999'
    },
    {
      icon: <Briefcase className="w-16 h-16 text-accent-gold mx-auto" />,
      title: 'Portfolio Management',
      duration: '5 Weeks',
      level: 'Advanced',
      lessons: 20,
      price: '₹12,999'
    },
    {
      icon: <Search className="w-16 h-16 text-accent-gold mx-auto" />,
      title: 'Risk Management Essentials',
      duration: '3 Weeks',
      level: 'Beginner',
      lessons: 15,
      price: '₹7,999'
    }
  ]

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
              className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-accent-gold transition group"
            >
              <div className="bg-bg-secondary p-8 text-center">
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold group-hover:text-accent-gold transition">
                  {course.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> {course.lessons} Lessons</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.level === 'Beginner' ? 'bg-accent-green/20 text-accent-green' :
                    course.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                    {course.level}
                  </span>
                  <span className="text-2xl font-bold text-accent-gold">{course.price}</span>
                </div>

                <button className="w-full bg-accent-gold text-bg-primary py-3 rounded-md font-bold hover:bg-accent-gold/90 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
