import { Flame, Clock } from 'lucide-react'

export default function News() {
  const newsItems = [
    {
      category: 'Market Analysis',
      title: 'Fed Signals Potential Rate Cuts in 2026',
      excerpt: 'The Federal Reserve hints at possible interest rate adjustments as inflation shows signs of cooling.',
      time: '2 hours ago',
      trending: true
    },
    {
      category: 'Technical Update',
      title: 'New AI-Powered Indicator Released',
      excerpt: 'Our latest indicator uses machine learning to predict market movements with unprecedented accuracy.',
      time: '5 hours ago',
      trending: false
    },
    {
      category: 'Trading Tips',
      title: '5 Strategies for Volatile Markets',
      excerpt: 'Expert traders share their proven techniques for navigating uncertain market conditions.',
      time: '1 day ago',
      trending: true
    }
  ]

  return (
    <section id="news" className="py-24 px-8 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Stay Informed</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Latest <span className="text-accent-gold">News</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Real-time updates on market trends, indicators, and trading strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-accent-gold font-semibold">{item.category}</span>
                {item.trending && (
                  <span className="flex items-center gap-1 text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                    <Flame className="w-3 h-3" /> Trending
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition">
                {item.title}
              </h3>

              <p className="text-text-secondary mb-4 line-clamp-2">{item.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-text-secondary">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                <span className="text-accent-gold group-hover:translate-x-1 transition">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
