/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  corePlugins: {},
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        black: {
          900: "#000000",
          800: "#333333",
          700: "#5C5C5C",
          600: "#8B8B8B",
          500: "#B3B3B3",
          400: "#CFCFCF",
          300: "#E2E2E2",
          200: "#EBEBEB",
          100: "#F8F8F8",
          0: "#FFFFFF",
        },
        violet: {
          900: "#3E1444",
        },
        // primary: "#ecc94b",
      },
      fontSize: {
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "26px": "26px",
        "30px": "30px",
        "32px": "32px",
        "40px": "40px",
      },
      lineHeight: {
        "extra-loose": "56px",
      },
    },
  },

  plugins: [
      require("daisyui")],
};
