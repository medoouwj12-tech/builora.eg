/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        buildora: {
          darkest: '#030712',
          dark: '#070B14',
          surface: '#0B1222',
          card: 'rgba(15, 23, 42, 0.75)',
          cardHover: 'rgba(23, 37, 84, 0.6)',
          border: 'rgba(56, 189, 248, 0.15)',
          borderHover: 'rgba(56, 189, 248, 0.45)',
          cyan: '#00f2fe',
          blue: '#3b82f6',
          indigo: '#6366f1',
          accent: '#06b6d4',
          teal: '#14b8a6',
          purple: '#8b5cf6',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Cairo', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        cairo: ['Cairo', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(2, 6, 23, 0.7), 0 0 1px 1px rgba(56, 189, 248, 0.15)',
        'glow-card-hover': '0 20px 40px -10px rgba(0, 242, 254, 0.15), 0 0 25px rgba(56, 189, 248, 0.25)',
        'glow-button': '0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
