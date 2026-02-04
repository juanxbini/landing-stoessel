/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        accent: '#0f766e',
        'accent-contrast': '#d97706',
        'text-muted': '#64748b',
        'bg-light': '#f8fafc',
        'bg-dark': '#020617',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f766e, #14b8a6)',
        'accent-gradient': 'linear-gradient(135deg, #0f766e, #14b8a6)',
      },
      borderRadius: {
        'xl': '18px',
        '2xl': '24px',
      },
      boxShadow: {
        'soft': '0 12px 32px rgba(2,6,23,0.08)',
        'strong': '0 28px 80px rgba(2,6,23,0.22)',
        'accent': '0 14px 36px rgba(15,118,110,0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
