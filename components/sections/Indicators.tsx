import Link from 'next/link'

export default function Indicators() {
  const indicators = [
    {
      id: 'momentum-master',
      name: 'Momentum Master',
      price: '₹2,999',
      features: ['Real-time signals', 'Multi-timeframe', 'Custom alerts', 'Backtesting'],
      popular: false
    },
    {
      id: 'trend-prophet',
      name: 'Trend Prophet',
      price: '₹4,999',
      features: ['Advanced algorithms', 'AI-powered', 'Pattern recognition', 'Risk calculator'],
      popular: true
    },
    {
      id: 'volume-wizard',
      name: 'Volume Wizard',
      price: '₹3,499',
      features: ['Volume analysis', 'Smart money tracking', 'Institutional flow', 'Delta tracking'],
      popular: false
    }
  ]

  return (
    <section id="indicators" className="py-24 px-8 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Premium Tools</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Trading <span className="text-accent-gold">Indicators</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Professional-grade indicators to give you the edge in the markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`bg-bg-card border-2 ${indicator.popular ? 'border-accent-gold' : 'border-border'} rounded-2xl p-8 relative hover:border-accent-gold transition flex flex-col`}
            >
              {indicator.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-bg-primary px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{indicator.name}</h3>
              <div className="text-4xl font-bold text-accent-gold mb-6">{indicator.price}</div>

              <ul className="space-y-3 mb-8">
                {indicator.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent-green font-bold">✓</span>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/indicators/${indicator.id}`}
                className="mt-auto w-full bg-accent-gold text-bg-primary py-4 rounded-xl font-bold hover:bg-accent-gold/90 transition text-center shadow-lg shadow-accent-gold/20"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
