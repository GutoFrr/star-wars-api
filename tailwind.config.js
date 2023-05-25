/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1102px',
    },
    extend: {
      colors: {
        'theme-yellow': '#FFC700',
        'theme-gray-200': '#CFCFCF',
        'theme-gray-500': '#818181',
        'theme-gray-700': '#505050',
        'theme-green': '#00FF66',
      },
    },
  },
  plugins: [],
};
