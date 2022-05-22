module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) // Mobile devices

      'sm': { 'min': '481px', 'max': '768px' },
      // => @media (min-width: 640px and max-width: 767px) // iPads, Tablets

      'md': { 'min': '769px', 'max': '1024px' },
      // => @media (min-width: 768px and max-width: 1023px) // Laptops, Small screens

      'lg': { 'min': '1025px' },
      // => @media (min-width: 1024px and max-width: 1279px) // Desktops, Large screens
    },
  },
  plugins: [],
}
