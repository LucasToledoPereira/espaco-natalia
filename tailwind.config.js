/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#55a491',
        'whats': '#25d366',
      },
      backgroundImage: {
        'background': "url('/assets/images/background.jpeg')",
      }
    },
  },
  plugins: [],
}