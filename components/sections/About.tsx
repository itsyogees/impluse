export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Our Story</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            About <span className="text-accent-gold">IMPULSE</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Empowering traders worldwide with cutting-edge tools and education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Building the Future of Trading Education</h3>
            <p className="text-text-secondary leading-relaxed">
              IMPULSE was founded with a singular mission: to democratize professional-grade trading tools
              and education. We believe that every trader, regardless of their experience level, deserves
              access to institutional-quality indicators and expert-led training.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Our team comprises seasoned traders, technical analysts, and educators who have spent decades
              in the financial markets. We&apos;ve channeled our collective expertise into creating a platform
              that truly serves the trading community.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With over 15,000 active traders and a 98% satisfaction rate, IMPULSE has become the trusted
              partner for traders seeking to elevate their game and achieve consistent profitability.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition">
              <h4 className="text-xl font-bold mb-3">Our Mission</h4>
              <p className="text-text-secondary">
                To provide world-class trading education and tools that empower individuals to achieve
                financial independence through smart, informed trading decisions.
              </p>
            </div>

            <div className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition">
              <h4 className="text-xl font-bold mb-3">Our Vision</h4>
              <p className="text-text-secondary">
                To become the global standard for trading education, creating a community of successful
                traders who trade with confidence and precision.
              </p>
            </div>

            <div className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition">
              <h4 className="text-xl font-bold mb-3">Our Values</h4>
              <p className="text-text-secondary">
                Excellence, integrity, innovation, and student success. We&apos;re committed to continuously
                improving our offerings and staying at the forefront of trading technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
