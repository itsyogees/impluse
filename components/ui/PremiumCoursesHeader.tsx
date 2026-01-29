'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PremiumCoursesHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-green-900/30 bg-[#020C0E]/90 backdrop-blur-xl z-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">

        {/* Left side: Logo + Premium title */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo2.png"
            alt="Premium Courses"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <div>
            <h1 className="text-lg sm:text-xl font-black text-green-400 tracking-wider">
              PREMIUM <span className="text-white">COURSES</span>
            </h1>
            <p className="text-[10px] text-green-500/60 font-black uppercase tracking-[0.2em]">
              Hulk Scalper King Academy
            </p>
          </div>
        </Link>

        {/* Right side: Login */}
        <Link
          href="/login"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-7 py-2.5 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]"
        >
          Login
        </Link>
      </div>
    </header>
  )
}
