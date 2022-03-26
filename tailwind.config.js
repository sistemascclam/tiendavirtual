module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Nunito'],
    },
    extend: {
      colors:{
        "mk-blue":'#0674EC'
      },
      zIndex:{
        '2000': '2000',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
