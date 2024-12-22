/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Replace with your primary color
        secondary: '#64748b', // Replace with your secondary color
        background: '#f3f4f6', // Replace with your background color
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif'], // Replace with your font family
      },
      fontFamily: {
        'merriweather-sans': ['"Merriweather Sans"', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem', // Example spacing
      },
      width: {
        '300px': '300px',
      },
      height: {
        '400px': '400px',
      },
    },
  },
  plugins: [],
}

