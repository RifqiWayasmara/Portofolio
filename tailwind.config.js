/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        Primary:'#14b8a6',
        secondary: '#64748b',
        Dark:'#18181b',    
      },
      screen:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
