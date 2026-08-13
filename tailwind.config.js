/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#082F2B',
          700: '#0B6E64',
          600: '#0E8377',
          100: '#E4F3F0',
        },
        coral: {
          600: '#F0532F',
          500: '#FF6B4A',
        },
        bg: '#F7F9F8',
        surface: '#FFFFFF',
        ink: {
          900: '#101418',
          600: '#5B6570',
          400: '#8B95A0',
        },
        border: '#E4E8E7',
        success: '#2F9E62',
        warning: '#F5A623',
        error: '#E23F3F',
        info: '#3E8EF7',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sig: '18px 18px 18px 6px',
        'sig-sm': '12px 12px 12px 4px',
      },
      boxShadow: {
        sm2: '0 1px 2px rgba(16,20,24,0.06)',
        md2: '0 4px 16px rgba(8,47,43,0.10)',
      },
    },
  },
  plugins: [],
}
