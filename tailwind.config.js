/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        happy: "Happy Monkey",
        ibm: "IBM Plex Mono",
        write: "Playwrite AU SA",
      },
    },
    screens: {
      "-600": {
        max: "600px",
      },
    },
  },
  plugins: [],
};
