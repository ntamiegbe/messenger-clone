/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#01020f', // Dark Blue
        lightGray: '#333333', // Dark Gray
        white: '#FFFFFF', // White
        lightBlue: '#3E8BC9', // Light Blue
        darkGray: '#CCCCCC', // Light Gray
        lighterBlue: '#5896D6', // Lighter Blue
        darkerBlue: '#0D1F2E', // Darker Blue
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
};
