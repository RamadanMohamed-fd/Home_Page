/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend:
     {
    
      keyframes:{
        extend:{
          "50%":{width:"60px "},
          
        },
        moveUp:{
          "100%":{top:"2rem",opacity:"1"},
        },
        moveUp1:{
          "100%":{top:"3.6rem",opacity:"1"},
        },
        moveDown:{
          "100%":{bottom:"3.6rem",opacity:"1"},
        },
        moveDown1:{
          "100%":{bottom:"3.5rem",opacity:"1"},
        },
        topdown:{
          "0%":{ top:"-10rem", opacity:"0"},
          "100%":{ top:"0rem", opacity:"1"}
        }
      },
      animation:{
        extend:"extend 1.5s ",
        moveUp:"moveUp 1s forwards",
        moveUp1:"moveUp1 1s forwards",
        moveDown:"moveDown 1s forwards",
        moveDown1:"moveDown1 1s forwards",
        topdown:" topdown 1s forwards"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}
