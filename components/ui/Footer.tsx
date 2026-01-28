export default function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-cinzel text-2xl font-bold text-accent-gold mb-4">IMPULSE</div>
            <p className="text-text-secondary leading-relaxed">
              Empowering traders worldwide with professional tools, expert education, and cutting-edge 
              strategies to succeed in the financial markets.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#indicators" className="text-text-secondary hover:text-accent-gold transition">Indicators</a></li>
              <li><a href="#courses" className="text-text-secondary hover:text-accent-gold transition">Courses</a></li>
              <li><a href="#news" className="text-text-secondary hover:text-accent-gold transition">Market News</a></li>
              <li><a href="#enroll" className="text-text-secondary hover:text-accent-gold transition">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-text-secondary hover:text-accent-gold transition">About Us</a></li>
              <li><a href="#contact" className="text-text-secondary hover:text-accent-gold transition">Contact</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-gold transition">Blog</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-gold transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-accent-gold transition">Privacy Policy</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-gold transition">Terms of Service</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-gold transition">Disclaimer</a></li>
              <li><a href="#" className="text-text-secondary hover:text-accent-gold transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-text-secondary text-sm">
          <p>© 2026 IMPULSE. All rights reserved. Trade responsibly. Past performance is not indicative of future results.</p>
        </div>
      </div>
    </footer>
  )
}
