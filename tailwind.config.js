/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,html}'
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

