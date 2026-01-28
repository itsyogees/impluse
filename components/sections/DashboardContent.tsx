import {
  BookOpen,
  CheckCircle2,
  BarChart3,
  Flame,
  GraduationCap,
  Trophy,
  Search,
  Bell,
  Star,
  Clock,
  FileText,
  Zap,
  TrendingUp,
  MessageSquare,
  User
} from 'lucide-react'

export default function DashboardContent() {
  const stats = [
    { icon: <BookOpen className="w-8 h-8 text-accent-gold" />, value: '12', label: 'Courses Enrolled', trend: '↗ +2' },
    { icon: <CheckCircle2 className="w-8 h-8 text-accent-gold" />, value: '65%', label: 'Avg. Completion', trend: '↗ +15%' },
    { icon: <BarChart3 className="w-8 h-8 text-accent-gold" />, value: '8', label: 'Active Indicators', trend: '↗ +1' },
    { icon: <Flame className="w-8 h-8 text-accent-gold" />, value: '156', label: 'Day Streak', trend: '↗ 7 Days' },
  ]

  const courses = [
    {
      icon: <BarChart3 className="w-8 h-8 text-accent-gold" />,
      title: 'Technical Analysis Fundamentals',
      duration: '4 Weeks',
      lesson: '12 of 18',
      progress: 65
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-gold" />,
      title: 'Intraday Special Tricks',
      duration: '6 Weeks',
      lesson: '4 of 15',
      progress: 27
    }
  ]

  const activities = [
    { icon: <GraduationCap className="w-6 h-6 text-accent-gold" />, title: 'Completed Lesson', time: '2 hours ago' },
    { icon: <BarChart3 className="w-6 h-6 text-accent-gold" />, title: 'Indicator Signal', time: '5 hours ago' },
    { icon: <Trophy className="w-6 h-6 text-accent-gold" />, title: 'Achievement Unlocked', time: '8 hours ago' },
  ]

  return (
    <main className="flex-1 ml-[250px] p-8 w-[calc(100%-250px)]">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h1 className="font-cinzel text-4xl font-bold mb-2">Welcome back, John</h1>
          <User className="w-8 h-8 text-accent-gold mb-2" />
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent-gold transition">
            <Search className="w-5 h-5 text-text-secondary" />
          </button>
          <button className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent-gold transition relative">
            <Bell className="w-5 h-5 text-text-secondary" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
              3
            </span>
          </button>
          <button className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent-gold transition">
            <Star className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-bg-card border-2 border-border rounded-2xl p-7 hover:border-accent-gold transition">
            <div className="flex justify-between items-start mb-4">
              <div>{stat.icon}</div>
              <div className="text-accent-green text-sm font-semibold">{stat.trend}</div>
            </div>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-text-secondary text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Continue Learning */}
        <div className="bg-bg-card border-2 border-border rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Continue Learning</h2>
            <a href="#" className="text-accent-gold hover:underline text-sm">View All →</a>
          </div>

          <div className="space-y-6">
            {courses.map((course, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-16 h-16 bg-bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold mb-2">{course.title}</div>
                  <div className="flex gap-4 text-sm text-text-secondary mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Lesson {course.lesson}</span>
                  </div>
                  <div className="w-full bg-bg-secondary rounded-full h-2 mb-2">
                    <div
                      className="bg-accent-gold rounded-full h-2 transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-text-secondary">{course.progress}% Complete</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-bg-card border-2 border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BookOpen className="w-8 h-8 text-accent-gold" />, label: 'Browse Courses' },
                { icon: <BarChart3 className="w-8 h-8 text-accent-gold" />, label: 'Get Indicators' },
                { icon: <TrendingUp className="w-8 h-8 text-accent-gold" />, label: 'View Stats' },
                { icon: <MessageSquare className="w-8 h-8 text-accent-gold" />, label: 'Get Support' },
              ].map((action, index) => (
                <button
                  key={index}
                  className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-accent-gold transition text-center flex flex-col items-center gap-2"
                >
                  <div>{action.icon}</div>
                  <div className="text-sm font-semibold">{action.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-bg-card border-2 border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{activity.title}</div>
                    <div className="text-sm text-text-secondary">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
