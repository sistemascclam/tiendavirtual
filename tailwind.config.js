module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      colors:{
        "mk-blue":'#0674EC',
        purple:'#702CDD',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
