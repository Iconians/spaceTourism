/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        homeDesktop: "url('/home/background-home-desktop.jpg')"
      }
    },
  },
  plugins: [],
}

