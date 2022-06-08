module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
},

  theme: {

    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    extend: {
      colors: {
          backgroundColor: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)',
          darkblue: '#243a73'
      },

      backgroundImage: {
        'homescreen-img':'url("./Components/images/bg1.jpg")',
        'school-bg':'url("./Components/images/a11.jpg")',
        'info-bg':'url("./Components/images/a11.jpg")',
        'school1':'url("./Components/images/a12.jpg")',
        'school2':'url("./Components/images/a5.jpg")',
        'school3':'url("./Components/images/a4.jpg")',
        'school4':'url("./Components/images/a6.jpg")',      
        'image2': 'url("./images/t7.jpg")'
      },
     
      zIndex: {
        '10000' : '10000',
        '20000' : '20000'
      },
    },
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}