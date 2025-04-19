/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      charcoal: '#4F4B45',
      crayolaBlue: '#3772FF',
      coquelicot: '#FF4A1C',
      eggplant: '#684551',
      eggplantLight: '#875969',
      flame: '#E4572E',
      greenMuted: '#45685C',
      manila: '#e7c9a9',
      manilaDark: '#cba175',
      nonPhotoBlue: '#73D2DE',
      onyx: '#424242',
      papaya: '#F1E3D3',
      verdigris: '#75B9BE',
      verdigrisDark: '#52A7AE',
    },
    extend: {
      spacing: {
        '1/5': '20%',
        '1/3': '33.3%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
  plugins: [],
}
