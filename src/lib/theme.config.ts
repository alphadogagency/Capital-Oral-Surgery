export const theme = {
  colors: {
    slateInk: "#1b2733",
    linenWhite: "#f4f4f4",
    paleSky: "#eaf5fa",
    midnightBlue: "#0e3e73",
    capitalBlue: "#2c5cb1",
    coastalTeal: "#6dc4d5",
    warmTaupe: "#6f6357",
    primary: "#0e3e73",
    secondary: "#2c5cb1",
    brandBlue: "#2c5cb1",
    brandCyan: "#6dc4d5",
    accent: "#6dc4d5",
    background: "#f4f4f4",
    surface: "#f4f4f4",
    aquaSoft: "#eaf5fa",
    aquaPale: "#eaf5fa",
    foreground: "#1b2733",
    muted: "#6f6357",
    line: "#90877e",
    placeholder: "#6f6357",
    midnight: "#0e3e73",
  },
  fonts: {
    heading: "Fraunces, Georgia, Cambria, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, sans-serif",
  },
  radius: {
    sm: "0.25rem",
    md: "0.75rem",
    lg: "1rem",
  },
} as const;

export type Theme = typeof theme;
