/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // La Jhinga Brand Colors (Deep Teal, Coral, Light Teal, Warm Sand)
        lajhinga: {
          teal: '#014E68',
          tealHover: '#003B4F',
          coral: '#FF8F72',
          coralLight: '#FFA188',
          coralHover: '#E8775B',
          ocean: '#5BC5D2',
          oceanDark: '#43AAB7',
          sand: '#FFF8F5',
          sandDark: '#F7EDE7',
          sandCard: '#FFFFFF',
          ink: '#0A2E3A',
          inkMuted: '#3D5A64',
          white: '#FFFFFF',
          border: 'rgba(1, 78, 104, 0.12)',
          tealBorder: 'rgba(91, 197, 210, 0.35)',
          coralBorder: 'rgba(255, 143, 114, 0.4)',
          glow: 'rgba(255, 143, 114, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
