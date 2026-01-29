import { BarChart3, GraduationCap, TrendingUp, Lightbulb, Lock, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-accent-gold" />,
      title: 'Professional Indicators',
      description: 'Access a suite of institutional-grade trading indicators designed by market experts.'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-accent-gold" />,
      title: 'Expert Training',
      description: 'Learn from seasoned traders with decades of real-world experience.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent-gold" />,
      title: 'Real-Time Insights',
      description: 'Get live market analysis and trading signals delivered instantly.'
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-accent-gold" />,
      title: 'Strategic Planning',
      description: 'Develop robust trading strategies backed by proven methodologies.'
    },
    {
      icon: <Lock className="w-12 h-12 text-accent-gold" />,
      title: 'Risk Management',
      description: 'Master the art of protecting your capital with advanced techniques.'
    },
    {
      icon: <Globe className="w-12 h-12 text-accent-gold" />,
      title: 'Global Community',
      description: 'Connect with thousands of traders from around the world.'
    }
  ]

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Why Choose Us</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Everything You Need to <span className="text-accent-gold">Succeed</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Comprehensive tools and education designed to elevate your trading performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-bg-card border-2 border-border rounded-2xl p-6 hover:border-accent-gold transition group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition">
                {feature.title}
              </h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
