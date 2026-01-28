'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Home,
  BookOpen,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Newspaper,
  Users,
  Settings,
  CreditCard,
  LogOut,
  User,
  Crown
} from 'lucide-react'

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState('dashboard')

  const navSections = [
    {
      title: 'MAIN',
      items: [
        { id: 'dashboard', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
        { id: 'courses', icon: <BookOpen className="w-5 h-5" />, label: 'My Courses' },
        { id: 'indicators', icon: <BarChart3 className="w-5 h-5" />, label: 'My Indicators' },
        { id: 'stats', icon: <TrendingUp className="w-5 h-5" />, label: 'Trading Stats' },
      ]
    },
    {
      title: 'BROWSE',
      items: [
        { id: 'marketplace', icon: <ShoppingCart className="w-5 h-5" />, label: 'Marketplace' },
        { id: 'news', icon: <Newspaper className="w-5 h-5" />, label: 'Market News' },
        { id: 'community', icon: <Users className="w-5 h-5" />, label: 'Community' },
      ]
    },
    {
      title: 'ACCOUNT',
      items: [
        { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
        { id: 'billing', icon: <CreditCard className="w-5 h-5" />, label: 'Billing' },
        { id: 'logout', icon: <LogOut className="w-5 h-5" />, label: 'Logout' },
      ]
    }
  ]

  return (
    <aside className="w-[250px] bg-bg-secondary border-r-2 border-border fixed h-screen overflow-y-auto flex-shrink-0">
      <div className="p-8 border-b border-border">
        <Link href="/" className="font-cinzel text-3xl font-bold tracking-[3px] text-accent-gold">
          IMPULSE
        </Link>
      </div>

      <div className="p-8 border-b border-border">
        <div className="w-[60px] h-[60px] bg-gradient-to-br from-accent-gold to-[#c9a532] rounded-full flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-bg-primary" />
        </div>
        <div className="font-semibold text-lg mb-2">John Trader</div>
        <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold px-3 py-1.5 rounded-full text-xs text-accent-gold font-semibold">
          <Crown className="w-3 h-3" />
          <span>Premium</span>
        </div>
      </div>

      <nav className="py-6">
        {navSections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <div className="text-xs text-text-secondary uppercase tracking-wider px-8 pb-3">
              {section.title}
            </div>
            {section.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-4 px-8 py-3.5 transition border-l-[3px] ${activeNav === item.id
                  ? 'bg-accent-gold/10 text-accent-gold border-accent-gold'
                  : 'text-text-secondary border-transparent hover:bg-accent-gold/5 hover:text-text-primary hover:border-accent-gold'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
