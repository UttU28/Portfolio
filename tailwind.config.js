/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        'handwriting': ['"Architects Daughter"', 'cursive'],
        'heading': ['"Architects Daughter"', 'cursive'],
        'mono': ['"Architects Daughter"', 'cursive'], // Override mono to use handwritten font
        'hindi': ['Kalam', 'cursive'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
};