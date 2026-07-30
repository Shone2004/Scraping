/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','system-ui','-apple-system','sans-serif'] },
      colors: {
        brand: {
          50:  '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0',
          300: '#86efac', 400: '#4ade80', 500: '#22c55e',
          600: '#16a34a', 700: '#15803d', 800: '#166534',
          900: '#14532d', 950: '#052e16',
        },
      },
      borderRadius: { '2xl':'16px','3xl':'20px','4xl':'28px' },
      boxShadow: {
        'card':     '0 2px 16px rgba(0,0,0,0.04)',
        'card-md':  '0 8px 32px rgba(0,0,0,0.07)',
        'card-hover':'0 20px 60px rgba(22,163,74,0.12)',
        'green':    '0 8px 32px rgba(22,163,74,0.30)',
        'green-xl': '0 20px 60px rgba(22,163,74,0.35)',
        'hero':     '0 32px 80px rgba(0,0,0,0.10)',
      },
      animation: {
        'float':   'float 5.5s ease-in-out infinite',
        'float-d': 'float 5.5s ease-in-out 2s infinite',
        'ping-slow':'ping 3s cubic-bezier(0,0,.2,1) infinite',
        'slide-up':'slideUp .5s ease-out both',
        'fade-in': 'fadeIn .6s ease-out both',
      },
      keyframes: {
        float:   { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-14px)'} },
        slideUp: { from:{opacity:'0',transform:'translateY(20px)'},to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn:  { from:{opacity:'0'},to:{opacity:'1'} },
      },
      backgroundImage: {
        'emerald-grad':  'linear-gradient(135deg,#16a34a 0%,#166534 100%)',
        'emerald-radial':'radial-gradient(ellipse at center,#dcfce7 0%,#f0fdf4 100%)',
        'card-grad':     'linear-gradient(135deg,rgba(255,255,255,.96) 0%,rgba(240,253,244,.92) 100%)',
      },
      transitionTimingFunction: { 'spring':'cubic-bezier(0.34,1.56,0.64,1)' },
    },
  },
  plugins: [],
}
