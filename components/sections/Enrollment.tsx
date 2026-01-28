'use client'

import { useState } from 'react'
import { Rocket, MessageSquare, Mail, User, Phone, Globe, BarChart2, Layers, Briefcase, Zap } from 'lucide-react'

export default function Enrollment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    market: '',
    style: '',
    segment: '',
    experience: '',
    product: ''
  })

  return (
    <section id="enroll" className="py-24 px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm text-accent-gold uppercase tracking-[4px] mb-4 font-bold">Get Started</div>
          <h2 className="font-cinzel text-5xl md:text-6xl font-black mb-8">
            Enroll <span className="text-accent-gold">Today</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[700px] mx-auto leading-relaxed">
            Fill out the form below and our team will contact you with the best trading solutions tailored to your needs.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
          <div className="bg-bg-card border-2 border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-accent-gold/10 rounded-2xl mb-6 ring-1 ring-accent-gold/20">
                <Rocket className="w-10 h-10 text-accent-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-3 font-cinzel">Enrollment Form</h3>
              <p className="text-text-secondary font-medium">Complete the form and get instant access to our premium trading tools</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Full Name</label>
                  <div className="relative group/input">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 placeholder:text-text-secondary/50 font-medium"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Phone Number</label>
                  <div className="relative group/input">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 placeholder:text-text-secondary/50 font-medium"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Market */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Select Market</label>
                  <div className="relative group/input">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <select
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none font-medium text-text-primary"
                      value={formData.market}
                      onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                    >
                      <option value="" disabled>Select market</option>
                      <option value="indian">Indian Market</option>
                      <option value="forex">Forex</option>
                      <option value="crypto">Crypto</option>
                    </select>
                  </div>
                </div>

                {/* Style */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Trading Style</label>
                  <div className="relative group/input">
                    <BarChart2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <select
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none font-medium text-text-primary"
                      value={formData.style}
                      onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                    >
                      <option value="" disabled>Select style</option>
                      <option value="intraday">Intraday</option>
                      <option value="scalping">Scalping</option>
                      <option value="swing">Swing</option>
                      <option value="positional">Positional</option>
                    </select>
                  </div>
                </div>

                {/* Segment */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Market Segment</label>
                  <div className="relative group/input">
                    <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <select
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none font-medium text-text-primary"
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    >
                      <option value="" disabled>Select segment</option>
                      <option value="equity">Equity / Cash</option>
                      <option value="options">Options</option>
                      <option value="futures">Futures</option>
                      <option value="commodity">Commodity</option>
                    </select>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Experience Level</label>
                  <div className="relative group/input">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <select
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none font-medium text-text-primary"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="" disabled>Select experience</option>
                      <option value="0-1">Beginner (0-1 Year)</option>
                      <option value="1-3">Intermediate (1-3 Years)</option>
                      <option value="3+">Advanced (3+ Years)</option>
                    </select>
                  </div>
                </div>

                {/* Product */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-accent-gold ml-1">Interested Product</label>
                  <div className="relative group/input">
                    <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within/input:text-accent-gold transition-colors" />
                    <select
                      className="w-full bg-bg-secondary border-2 border-border rounded-2xl px-12 py-4 focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none font-medium text-text-primary"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    >
                      <option value="" disabled>Select product</option>
                      <option value="indicators">Premium Indicators</option>
                      <option value="courses">Advanced Courses</option>
                      <option value="bundled">Elite Bundle</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <button
                  type="button"
                  className="group relative flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  Submit via WhatsApp
                </button>
                <button
                  type="submit"
                  className="group relative flex items-center justify-center gap-3 bg-accent-gold text-bg-primary py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-accent-gold/20 hover:bg-white active:scale-[0.98] transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Contact via Email
                </button>
              </div>
            </form>
          </div>

          {/* Trust Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-text-secondary">
            <span className="flex items-center gap-2 saturate-0 opacity-50"><Zap className="w-4 h-4" /> Instant Response</span>
            <span className="flex items-center gap-2 saturate-0 opacity-50"><Layers className="w-4 h-4" /> Personalized Plan</span>
            <span className="flex items-center gap-2 saturate-0 opacity-50"><Briefcase className="w-4 h-4" /> Expert Advisory</span>
          </div>
        </div>
      </div>
    </section>
  )
}
