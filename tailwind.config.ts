import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        sage: "var(--sage)",
        "sage-deep": "var(--sage-deep)",
        clay: "var(--clay)",
      },
      fontFamily: {
        display: "var(--ff-display)",
        body: "var(--ff-body)",
      },
    },
  },
  plugins: [],
};

export default config;
