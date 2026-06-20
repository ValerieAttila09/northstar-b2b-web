/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F9F9F7",
        charcoal: "#111111",
        ink: "#181818",
        muted: "#6F6F67",
        line: "#E5E5E0",
        paper: "#FFFFFF",
        inverse: "#F4F4EF",
        signal: "#FFB000",
        "signal-deep": "#F26A00"
      },
      fontFamily: {
        sans: ["var(--font-space)", "Space Grotesk", "var(--font-kr)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "var(--font-kr)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(4.5rem, 13vw, 13.5rem)", { lineHeight: "0.86", letterSpacing: "0" }],
        "display-lg": ["clamp(3.25rem, 8vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "0" }],
        "display-md": ["clamp(2.75rem, 5.75vw, 6.25rem)", { lineHeight: "0.98", letterSpacing: "0" }],
        "body-xl": ["clamp(1.125rem, 1.45vw, 1.5rem)", { lineHeight: "1.45", letterSpacing: "0" }],
        micro: ["0.6875rem", { lineHeight: "1.1", letterSpacing: "0.12em" }]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        38: "9.5rem",
        46: "11.5rem"
      },
      borderWidth: {
        hairline: "1px"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.77, 0, 0.175, 1)"
      },
      boxShadow: {
        glass: "0 20px 60px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};
