/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '200px',
      },
      fontFamily: {
        'Reddit': ["Reddit Mono", "monospace"]
      },
      colors: {
        "btnBgColor": "#3b82f6",
        "bgFromGrad": "#09203f"
      }
    },
  },
  plugins: [],
}

