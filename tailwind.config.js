/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,css,js}"],
  darkMode: 'class',
  screens:{
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      colors: {
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        /**Social Media */
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram1: 'hsl(37, 97%, 70%)',
        instagram2: 'hsl(329, 70%, 58%)',
        youtube: 'hsl(348, 97%, 39%)',
        /**Dark*/
        darkToggle1: 'hsl(210, 78%, 56%)',
        darkToggle2: 'hsl(146, 68%, 55%)',

        veryDarkBlue: 'hsl(230, 17%, 14%)',
        veryDarkBlueTopPattern: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        desaturatedBlue: 'hsl(228, 34%, 66%)',
        /**Light */
        lightToggle: 'hsl(230, 22%, 74%)',

        veryLightBlue: 'hsl(225, 100%, 98%)',
        lightGrayishBlue: 'hsl(227, 47%, 96%)',
        darkGrayishBlue: 'hsl(228, 12%, 44%)',
        veryDarkBlueText: 'hsl(230, 17%, 14%)',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}

