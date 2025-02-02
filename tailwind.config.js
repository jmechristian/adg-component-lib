/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './lib/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#d50057',
        'brand-light-gray': '#e6e6e6',
      },
      fontFamily: {
        'brand-book': 'Gotham Book',
        'brand-bold': 'Gotham Bold',
        'brand-serif': 'orpheuspro',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
  // corePlugins: {
  //   preflight: false,
  //   border: true,
  // },
};
