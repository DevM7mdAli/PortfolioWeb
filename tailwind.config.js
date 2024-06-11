/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
        "mainBackground": "#29323c",
        "btnBgColor": "#3b82f6",
        "bgFromGrad": "#09203f"
      }
    },
  },
  plugins: [],
});

