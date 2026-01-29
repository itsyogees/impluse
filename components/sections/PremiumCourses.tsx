
'use client';

import Link from 'next/link';
import React from 'react';

interface CourseLevel {
  id: number;
  title: string;
  completed: boolean;
  progress: number;
}

const PremiumCoursesComponent: React.FC = () => {
  const courseLevels: CourseLevel[] = [
    { id: 1, title: 'Stock Basics', completed: false, progress: 0 },
    { id: 2, title: 'Trading Psychology', completed: false, progress: 0 },
    { id: 3, title: 'Level 3', completed: false, progress: 0 },
    { id: 4, title: 'Level 4', completed: false, progress: 0 },
    { id: 5, title: 'Level 5', completed: false, progress: 0 },
    { id: 6, title: 'Level 6', completed: false, progress: 0 },
    { id: 7, title: 'Level 7', completed: false, progress: 0 },
    { id: 8, title: 'Level 8', completed: false, progress: 0 },
    { id: 9, title: 'Level 9', completed: false, progress: 0 },
    { id: 10, title: 'Level 10', completed: false, progress: 0 },
    { id: 11, title: 'Level 11', completed: false, progress: 0 },
    { id: 12, title: 'Level 12', completed: false, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#020C0E] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 pt-24 pb-12 px-8 text-center">
        <p className='text-sm uppercase tracking-[0.3em] font-black text-accent-green mb-6'>100 Levels of Trading Mastery</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
          Master Trading with
        </h1>

        <h1 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-green-400 via-accent-green to-green-500 bg-clip-text text-transparent">
          Hulk Scalper King Academy
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          தமிழில் பங்குச்சந்தை கற்றுக்கொள்ளுங்கள். 100 levels, 1000+ pages of content, and comprehensive quizzes to transform you into a professional trader.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="bg-gradient-to-r from-green-600 to-green-400 text-black font-black py-4 px-10 rounded-xl text-base hover:from-green-500 hover:to-green-300 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            Start Free Demo (Level 1)
          </button>

          <button className="border-2 border-green-500 text-green-500 font-black py-4 px-10 rounded-xl text-base hover:bg-green-500 hover:text-black transition-all transform hover:scale-105">
            All Levels
          </button>
        </div>
      </div>



      <div className="px-8 pb-16 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="font-cinzel text-5xl font-bold mb-6">
              Course Levels
            </h4>
            <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
              Complete each level with 100% quiz score to unlock the next
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {courseLevels.map((level) => {
              const isLocked = level.id > 2

              return (
                <div
                  key={level.id}
                  className={`relative rounded-2xl p-6 text-center transition-all duration-300
        ${!isLocked
                      ? 'bg-gradient-to-br from-green-950/80 to-black border border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)]'
                      : 'bg-[#0A2228]/40 border border-white/5 opacity-60'
                    }`}
                >
                  {/* FREE badge */}
                  {level.id === 1 && (
                    <span className="absolute top-3 right-3 bg-green-500 text-black text-[10px] font-black px-3 py-1 rounded-full tracking-wider">
                      FREE
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center
          ${!isLocked
                        ? 'bg-green-500/20 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]'
                        : 'bg-white/5 text-gray-600'
                      }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Level Number */}
                  <h2 className="text-3xl font-bold text-white mb-1">
                    {level.id}
                  </h2>

                  {/* Title */}
                  <p className="text-sm text-gray-400 mb-4">
                    {level.title}
                  </p>



                  {!isLocked && (
                    <Link
                      href={`/premium-courses/level-${level.id}`}
                      className="block w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 px-4 rounded-lg transition-all text-center no-underline shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
                    >
                      Start Level {level.id}
                    </Link>
                  )}





                </div>
              )
            })}
          </div>

        </div>
      </div>

    </div>
  );
};

export default PremiumCoursesComponent;