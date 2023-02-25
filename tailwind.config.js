/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
              primary: {
                "50": "#EEF2FF",
                "700": "#4338CA"
              },
              secondary: {
                "100": "#E0F2FE",
                "800": "#075985"
              }
            },
            fontFamily: {
                sans: ["var(--font-inter)"]
            },
        },
    },
    plugins: []
  };