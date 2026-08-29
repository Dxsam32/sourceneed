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
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
