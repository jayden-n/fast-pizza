/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    // Keep everything as tailwind, and extend another style if u like
    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
