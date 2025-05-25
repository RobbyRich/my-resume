module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'skill':'#EEF0F0',
        'resume-bg':'#7BD2F9',
        'modern-300':'#393e46',
        'modern-400':'#222831',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
