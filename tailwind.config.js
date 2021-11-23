module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      transitionProperty: {
        top: "top",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
