'use client'

import { useState } from 'react'
import { Rocket, MessageSquare, Mail } from 'lucide-react'

export default function Enrollment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    interest: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="enroll" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Get Started</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Start Your Trading <span className="text-accent-gold">Journey</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            Fill out the form below and our team will get in touch with you
          </p>
        </div>

        <div className="max-w-[800px] mx-auto bg-bg-card border-2 border-border rounded-2xl p-10">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4"><Rocket className="w-12 h-12 text-accent-gold" /></div>
            <h3 className="text-2xl font-bold mb-2">Enrollment Form</h3>
            <p className="text-text-secondary">Let&apos;s get you started on the path to trading success</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition"
                  required
                >
                  <option value="">Select experience</option>
                  <option value="beginner">Beginner (0-1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Product Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition"
                  required
                >
                  <option value="">Select product</option>
                  <option value="indicators">Trading Indicators</option>
                  <option value="basic">Basic Courses</option>
                  <option value="premium">Premium Courses</option>
                  <option value="all">All Products</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 bg-accent-green text-bg-primary py-4 rounded-lg font-bold hover:bg-accent-green/90 transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> Submit via WhatsApp
              </button>
              <button
                type="submit"
                className="flex-1 bg-accent-gold text-bg-primary py-4 rounded-lg font-bold hover:bg-accent-gold/90 transition flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Contact via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
