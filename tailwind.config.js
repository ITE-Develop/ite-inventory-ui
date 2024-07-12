/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        '6': '6 6 0%',
        '4': '4 4 0%',
      },
    },
  },
  plugins: [],
}

