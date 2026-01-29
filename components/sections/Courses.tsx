import Link from 'next/link'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { FaBookOpen, FaBolt, FaCrosshairs, FaWater } from 'react-icons/fa6'

export default function Courses() {
  const courseData = [
    {
      id: 'price-action-market-profile',
      title: 'Price Action & Market Profile',
      level: 'Intermediate',
      description: 'Master the art of reading price movements and market structure like a pro',
      duration: '8 Weeks',
      students: '2,500+',
      icon: <FaBookOpen className="w-8 h-8 text-accent-gold" />,
      syllabus: [
        'Price Action Patterns',
        'Market Profile Basics',
        'Value Area Analysis',
        'TPO Charts',
        'Volume Profile'
      ]
    },
    {
      id: 'elliot-wave-gann-theory',
      title: 'Elliot Wave & Gann Theory',
      level: 'Advanced',
      description: 'Advanced technical analysis using time-tested wave and geometric principles',
      duration: '10 Weeks',
      students: '1,800+',
      icon: <FaWater className="w-8 h-8 text-accent-gold" />,
      syllabus: [
        'Elliot Wave Principles',
        'Wave Counting',
        'Gann Fan & Angles',
        'Time Cycles',
        'Price Projections'
      ]
    },
    {
      id: 'intraday-special-tricks',
      title: 'Intraday Special Tricks',
      level: 'All Levels',
      description: 'Secret strategies and tricks for profitable intraday trading',
      duration: '6 Weeks',
      students: '3,500+',
      icon: <FaBolt className="w-8 h-8 text-accent-gold" />,
      syllabus: [
        'Gap Trading',
        'Opening Range Breakout',
        'VWAP Strategies',
        'Momentum Plays',
        'Risk Management'
      ]
    },
    {
      id: 'mastery-comprehensive',
      title: 'Scalping, Intraday, Swing & Positional Mastery',
      level: 'Comprehensive',
      description: 'Complete trading mastery across all timeframes and styles',
      duration: '12 Weeks',
      students: '4,200+',
      icon: <FaCrosshairs className="w-8 h-8 text-accent-gold" />,
      syllabus: [
        'Scalping Techniques',
        'Intraday Setups',
        'Swing Trading',
        'Positional Strategies',
        'Portfolio Management'
      ]
    }
  ]

  return (
    <section id="courses" className="py-20 px-6 bg-[#020C0E]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="bg-[#05161A] border border-accent-gold/20 rounded-[40px] p-8 relative group hover:border-accent-gold/50 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
            >
              {/* Top Icons/Badge */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-[#05161A] border border-accent-gold/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                  {course.icon}
                </div>
                <span className="px-5 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/5 text-accent-gold text-[10px] font-bold uppercase tracking-widest leading-none">
                  {course.level}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-accent-gold transition-colors">
                {course.title}
              </h3>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed max-w-[90%]">
                {course.description}
              </p>

              {/* Duration & Students */}
              <div className="flex items-center gap-8 mb-10 text-text-secondary font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent-gold" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-gold" />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Modules as Tags */}
              <div className="mb-12">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#666] mb-5">Key Modules</div>
                <div className="flex flex-wrap gap-3">
                  {course.syllabus.map((module, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-[#0A2228] border border-accent-gold/10 text-text-secondary text-xs font-semibold hover:border-accent-gold/30 transition-colors"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enroll Button */}
              <Link
                href={`/enroll?courseId=${course.id}`}
                className="w-full bg-[#D4AF37] text-bg-primary py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-[#C5A028] transition-all duration-300 shadow-lg shadow-accent-gold/10"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-accent-gold/80 font-bold tracking-[3px] uppercase text-sm">
            Lifetime access & certificate upon completion
          </p>
        </div>
      </div>
    </section>
  )
}
