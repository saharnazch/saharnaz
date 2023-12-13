/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    container: {
      screens: {
        default: '250px',
        sm: '600px',
        lg: '700px',
        xl: '1240px',
        '2xl': '800px',


      },



    },

    extend: {

      colors: {
        'primary': '#967',
        'light': {
          50: '#111',
          100: '#999'
        },

      }

    }
  },

  plugins: [],
}
