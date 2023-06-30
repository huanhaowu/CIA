/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xlg': '1225px',
        'short': { 'raw': '(max-height: 870px)' },
      },
    },
  },
  plugins: [],
}

