/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {

        '4xl': [
            '0 0px 5px rgba(0, 0, 0, 0.50)',
            '0 0px 25px rgba(0, 0, 0, 0.30)',
            '0 0px 50px rgba(0, 0, 0, 0.15)',
            '0 0px 200px rgba(0, 0, 0, 0.5)'
        ]
      }
    },
    screens: {
      'smx':'350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}