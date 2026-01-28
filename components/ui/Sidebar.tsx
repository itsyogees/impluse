'use client'

import { usePathname } from 'next/navigation'
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
  Crown,
  X
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  const navSections = [
    {
      title: 'MAIN',
      items: [
        { href: '/dashboard', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
        { href: '/dashboard/courses', icon: <BookOpen className="w-5 h-5" />, label: 'My Courses' },
        { href: '/dashboard/indicators', icon: <BarChart3 className="w-5 h-5" />, label: 'My Indicators' },
        { href: '/dashboard/stats', icon: <TrendingUp className="w-5 h-5" />, label: 'Trading Stats' },
      ]
    },
    {
      title: 'BROWSE',
      items: [
        { href: '/dashboard/marketplace', icon: <ShoppingCart className="w-5 h-5" />, label: 'Market Place' },
        { href: '/dashboard/news', icon: <Newspaper className="w-5 h-5" />, label: 'Market News' },
        { href: '/dashboard/community', icon: <Users className="w-5 h-5" />, label: 'Community' },
      ]
    },
    {
      title: 'ACCOUNT',
      items: [
        { href: '/dashboard/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
        { href: '/dashboard/billing', icon: <CreditCard className="w-5 h-5" />, label: 'Billing' },
        { href: '/', icon: <LogOut className="w-5 h-5" />, label: 'Logout' },
      ]
    }
  ]

  return (
    <aside className={`
      w-[280px] bg-bg-secondary border-r border-white/5 fixed h-screen overflow-y-auto flex-shrink-0 top-0 left-0 z-50 transition-transform duration-300 ease-in-out custom-scrollbar
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-bg-secondary/50 backdrop-blur-xl sticky top-0 z-10">
        <Link href="/" className="font-cinzel text-3xl font-bold tracking-[3px] text-accent-gold hover:opacity-80 transition">
          IMPULSE
        </Link>
        <button
          onClick={onClose}
          className="lg:hidden text-text-secondary hover:text-accent-gold transition p-2 hover:bg-white/5 rounded-xl"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-8 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-[50px] h-[50px] bg-gradient-to-br from-accent-gold to-[#c9a532] rounded-2xl flex items-center justify-center shadow-lg shadow-accent-gold/20">
              <User className="w-6 h-6 text-bg-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-green border-2 border-bg-secondary rounded-full" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="font-bold text-sm truncate">John Trader</div>
            <div className="flex items-center gap-1.5 text-accent-gold">
              <Crown className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-widest">Elite</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="py-6">
        {navSections.map((section, idx) => (
          <div key={idx} className="mb-6 last:mb-20">
            <div className="text-[10px] text-text-secondary font-black uppercase tracking-[0.2em] px-8 pb-4 opacity-50">
              {section.title}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose()
                    }}
                    className={`group relative flex items-center gap-4 px-8 py-3 transition-all duration-300 ${isActive
                      ? 'text-accent-gold'
                      : 'text-text-secondary hover:text-text-primary'
                      }`}
                  >
                    {/* Active Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-accent-gold rounded-r-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    )}

                    <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-bold tracking-tight transition-all duration-300 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                      {item.label}
                    </span>

                    {/* Subtle Background Hover */}
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-accent-gold/10 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
