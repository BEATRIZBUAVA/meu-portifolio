/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        noticia: ['var(--font-noticia-text)'],
      },
      backgroundImage: {
        'papel-textura': "url('./assets/paper-texture.png')",


      },
      animation: {
        cloudMove: "cloudMove 60s linear infinite",
      },
      keyframes: {
        cloudMove: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

    },
  },
  plugins: [],
};
