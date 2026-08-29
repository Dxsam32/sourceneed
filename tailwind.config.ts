import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5EF",
        "paper-2": "#EFECE3",
        ink: "#171A20",
        "ink-soft": "#4A4E58",
        cobalt: "#1D3FC4",
        "cobalt-deep": "#152E92",
        amber: "#DE9308",
        "amber-deep": "#7A5200",
        "amber-soft": "#FBF1DC",
        line: "#D9D5C9",
        "line-dark": "#B9B4A5",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
