import { TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 sm:px-8 pt-20 sm:pt-24 pb-16 bg-gradient-to-br from-bg-primary to-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:50px_50px] z-0" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[6px] sm:tracking-[10px] md:tracking-[12px] text-accent-gold mb-4 sm:mb-6 opacity-90 leading-none">
          IMPULSE
        </h1>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-accent-gold/50" />
          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent-gold" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-accent-gold/50" />
        </div>

        <div className="font-cinzel text-base sm:text-xl md:text-2xl tracking-[2px] sm:tracking-[4px] text-accent-gold/90 mb-6 sm:mb-10 uppercase">
          Intraday • Instant • Profit
        </div>

        <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-[600px] mx-auto mb-6 sm:mb-12 leading-relaxed px-4">
          Master the art of trading with professional indicators and expert-led courses
        </p>

        <div className="flex flex-col items-center gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full px-8 sm:px-0 max-w-md sm:max-w-none">
            <a
              href="/#indicators"
              className="bg-accent-gold px-8 sm:px-10 py-3 sm:py-3.5 rounded-md text-bg-primary font-bold hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition text-center whitespace-nowrap"
            >
              Explore Indicators
            </a>
            <a
              href="/#courses"
              className="border-2 border-accent-gold px-8 sm:px-10 py-3 sm:py-3.5 rounded-md text-accent-gold font-bold hover:bg-accent-gold hover:text-bg-primary transition text-center whitespace-nowrap"
            >
              View Courses
            </a>
          </div>

          <div className="animate-bounce opacity-40 hidden sm:block mt-4">
            <div className="w-5 h-8 border-2 border-accent-gold rounded-full flex justify-center p-1">
              <div className="w-1 h-1.5 bg-accent-gold rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
