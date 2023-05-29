/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{js,jsx,ts,tsx}"],
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
		 "primary": "#06283D",
		 "secondary": "#1363DF",
		 "accent": "#47B5FF",
		 "neutral": "#DFF6FF",
		 "base-100": "#2c2f33",
		 "info": "#38bdf8",
		 "success": "#57F287",
		 "warning": "#FEE75C",
		 "error": "#ED4245",
        },
        darkChat: {
		 "primary": "#06283D",
		 "secondary": "#1363DF",
		 "accent": "#47B5FF",
		 "neutral": "#f3f4f6",
		 "base-100": "#2c2f33",
		 "info": "#38bdf8",
		 "success": "#57F287",
		 "warning": "#FEE75C",
		 "error": "#ED4245",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
