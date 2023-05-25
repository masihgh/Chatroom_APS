/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: true,
    prefix: "",
    darkTheme: "darkChat",
    themes: [
      {
        lightChat: {
          primary: "#48352d",
          secondary: "#065f46",
          accent: "#b45309",
          neutral: "#48352d",
          "base-100": "#FFFFFF",
          info: "#38bdf8",
          success: "#10b981",
          warning: "#eab308",
          error: "#ef4444",
        },
        darkChat: {
          primary: "#48352d",
          secondary: "#065f46",
          accent: "#b45309",
          neutral: "#48352d",
          "base-100": "#FFFFFF",
          info: "#38bdf8",
          success: "#10b981",
          warning: "#eab308",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
