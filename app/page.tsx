'use client'

import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import Features from '@/components/sections/Features'
import Indicators from '@/components/sections/Indicators'
import Courses from '@/components/sections/Courses'
import News from '@/components/sections/News'
import Enrollment from '@/components/sections/Enrollment'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <Features />
      <Indicators />
      <Courses />
      <News />
      <Enrollment />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
