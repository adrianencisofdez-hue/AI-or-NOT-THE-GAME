import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#39ff14",
          "green-dim": "#2bcc10",
        },
      },
      fontFamily: {
        pixel: ["var(--font-press-start)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 10px #39ff14, 0 0 25px #39ff1444, 0 0 50px #39ff1422",
        "neon-strong":
          "0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 60px #39ff1466, inset 0 0 15px #39ff1422",
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": {
            boxShadow:
              "0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 60px #39ff1466",
          },
          "50%": {
            boxShadow:
              "0 0 25px #39ff14, 0 0 50px #39ff14, 0 0 80px #39ff1488",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
