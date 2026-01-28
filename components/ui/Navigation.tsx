'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#indicators', label: 'Indicators' },
    { href: '#courses', label: 'Courses' },
    { href: '#news', label: 'News' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/95 backdrop-blur-xl' : 'bg-bg-primary/95'
      } border-b border-border`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[2px] text-accent-gold transition-colors">
            IMPULSE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 xl:gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-text-secondary hover:text-accent-gold transition font-medium text-sm">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/dashboard"
              className="border-2 border-accent-green px-7 py-2.5 rounded-md text-accent-green font-semibold hover:bg-accent-green hover:text-bg-primary transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-accent-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[300px] bg-bg-primary border-l border-border z-50 lg:hidden p-8"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)} className="text-accent-gold">
                  <X size={28} />
                </button>
              </div>

              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl text-text-secondary hover:text-accent-gold transition font-medium block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-6 border-t border-border">
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full inline-block text-center border-2 border-accent-green px-7 py-3 rounded-md text-accent-green font-semibold hover:bg-accent-green hover:text-bg-primary transition"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
