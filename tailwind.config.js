/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1120",
        "ink-soft": "#131B2E",
        paper: "#F7F5F0",
        panel: "#FFFFFF",
        line: "#E4E1D8",
        "line-dark": "#232B3D",
        body: "#10131C",
        muted: "#5B6472",
        "muted-dark": "#8B93A7",
        signal: "#E8A33D",
        "signal-soft": "#F4C878",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        rise: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-start infinite",
        rise: "rise 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
