/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a1a1a',
          secondary: '#0d2626',
          card: '#133333',
        },
        accent: {
          gold: '#d4af37',
          green: '#00ff88',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0b0b0',
        },
        border: {
          DEFAULT: '#2d4d4d',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
