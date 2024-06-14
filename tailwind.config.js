/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-brand': '#1f97bf',
        'base-dark': '#04607e',
        'base-dark-highlight': '#0a2b35',
        'base-light': '#bee1ec',
        'base-mid': '#0585b0',
        'brand-green': '#1bd159',
        'brand-indigo': '#304bc9',
        'brand-indigo-light': '#7789df',
        'brand-red': '#ff4421',
        'brand-yellow': '#ffbe21',
        'brand-yellow-light': '#ffca4b',
        clemson: '#ff9321',
        'clemson-dark': '#ca6800',
        dark: '#0e1424',
        'dark-mid': '#1a1a1a',
        'dark-dark': '#0E0E0E',
      },
    },
  },
  plugins: [],
};
