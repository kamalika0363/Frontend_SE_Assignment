/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url(' /Analytics section/Image.png')",
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundRepeat: {
        'none': 'no-repeat',
      },
    },
  },
  plugins: [],
}