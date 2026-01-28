'use client'

import { useState } from 'react'
import { Mail, Phone, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 px-8 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[2px] mb-4">Get in Touch</div>
          <h2 className="font-cinzel text-5xl font-bold mb-6">
            Contact <span className="text-accent-gold">Us</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
            We&apos;re here to help you succeed. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition">
              <div className="mb-4"><Mail className="w-12 h-12 text-accent-gold" /></div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-text-secondary mb-4">For general inquiries and support</p>
              <p className="text-accent-gold">support@impulse.com</p>
              <p className="text-accent-gold">hello@impulse.com</p>
            </div>

            <div className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition">
              <div className="mb-4"><Phone className="w-12 h-12 text-accent-gold" /></div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-text-secondary mb-4">Available Monday - Saturday, 9 AM - 6 PM IST</p>
              <p className="text-accent-gold">+91 98765 43210</p>
              <p className="text-accent-gold">+91 98765 43211</p>
            </div>

            <div className="bg-bg-card border-2 border-border rounded-2xl p-8 hover:border-accent-gold transition">
              <div className="mb-4"><MessageSquare className="w-12 h-12 text-accent-gold" /></div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-text-secondary mb-4">Quick support via WhatsApp</p>
              <p className="text-accent-gold">+91 98765 43210</p>
            </div>
          </div>

          <div className="bg-bg-card border-2 border-border rounded-2xl p-10">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4"><Send className="w-12 h-12 text-accent-gold" /></div>
              <h3 className="text-2xl font-bold">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
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
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:border-accent-gold focus:outline-none transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-gold text-bg-primary py-4 rounded-lg font-bold hover:bg-accent-gold/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
