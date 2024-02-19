/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F5F4F5",
        primary: "#BA06F9",
        red: "rgb(249, 21, 6)"
      },
    },
    fontFamily: {
      clashDispley: ["Clash Display", "sans-serif"],
      displey: ["'Noto Sans Display'", "sans-serif"],
      RedHat: ['Red Hat Display', "sans-serif"],
      roboto: ["sans-serif"]
    },
    backgroundImage:{
      dashed: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23E5E7EAFF' stroke-width='4' stroke-dasharray='14%2c 23%2c 19' stroke-dashoffset='45' stroke-linecap='square'/%3e%3c/svg%3e")`
    }
  },
  plugins: [],
};
