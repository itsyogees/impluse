import Link from 'next/link'
import Image from 'next/image'

export default function Indicators() {
  const indicators = [
    {
      id: 'ant-man-rsi-zones',
      name: 'Ant-Man RSI Zones',
      price: '₹999/-',
      description: 'Identifies precise overbought/oversold zones for exact entry/exit points. 82% Accuracy Signals.',
      image: '/course1.png'
    },
    {
      id: 'spider-band-trap-analyzer',
      name: 'Spider-Band Trap Analyzer',
      price: '₹999/-',
      description: 'Protects you from market traps with 79% success rate. No repaint signals.',
      image: '/course2.png'
    },
    {
      id: 'hulk-scalper-v3',
      name: 'Hulk Scalper V3',
      price: '₹999/-',
      description: 'Ultra-high volume momentum-based signals for aggressive scalping. 78% Accuracy.',
      image: '/course3.png'
    },
    {
      id: 'ironman-intraday-analyzer',
      name: 'Ironman Intraday Analyzer',
      price: '₹999/-',
      description: 'High-speed AI powered signals for rapid intraday trading decisions. 76% Win Rate.',
      image: '/course4.png'
    }
  ]

  return (
    <section id="indicators" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Premium Indicators</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Trading <span className="text-accent-gold">Indicators</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto mb-4">
            Powerful tools designed to give you the edge in any market condition
          </p>
          <div className="text-2xl font-bold text-accent-gold">Each Indicator @ ₹999/- Only</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="bg-bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-accent-gold transition flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={indicator.image}
                  alt={indicator.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full border border-accent-gold text-accent-gold font-bold text-sm">
                  {indicator.price}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-gold transition-colors">{indicator.name}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow">{indicator.description}</p>

                <Link
                  href={`/checkout/${indicator.id}`}
                  className="w-full bg-accent-gold text-bg-primary py-3 rounded-xl font-bold hover:bg-accent-gold/90 transition text-center shadow-lg shadow-accent-gold/20"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

