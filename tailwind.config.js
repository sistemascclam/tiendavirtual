module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
