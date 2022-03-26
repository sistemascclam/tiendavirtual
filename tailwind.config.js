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
      },
      borderWidth: {
      '1': '1px',
      },
      maxWidth:{
        '8xl': '1920px',
      },
      boxShadow:{
        'card':'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
