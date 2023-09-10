/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      monomaniac: ['Monomaniac One', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  backgroundImage:{
    'member-active': "url('/images/member-bg.svg')",
  },
  plugins: [],
}

