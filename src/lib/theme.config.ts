export const theme = {
  colors: {
    // September 2026 branding guide. Keep these in sync with global.css.
    espresso: "#1e1b18",
    capitalForest: "#3e5a40",
    linenWhite: "#f8f6f1",
    wheat: "#c6ae82",
    terracotta: "#b4622f",
    primary: "#3e5a40",
    secondary: "#3e5a40",
    accent: "#c6ae82",
    background: "#f8f6f1",
    surface: "#f8f6f1",
    foreground: "#1e1b18",
    muted: "color-mix(in srgb, #1e1b18 75%, #f8f6f1)",
    line: "color-mix(in srgb, #1e1b18 48%, #f8f6f1)",
    placeholder: "color-mix(in srgb, #1e1b18 75%, #f8f6f1)",
    // Compatibility aliases for the existing page utilities.
    brandBlue: "#3e5a40",
    brandCyan: "#c6ae82",
    aquaSoft: "color-mix(in srgb, #c6ae82 13%, #f8f6f1)",
    aquaPale: "color-mix(in srgb, #c6ae82 13%, #f8f6f1)",
    midnight: "#3e5a40",
  },
  fonts: {
    // Retain Work Sans until Trajan Pro 3 Light / Futura PT Light webfonts arrive.
    heading: "'Capital Work Sans', ui-sans-serif, system-ui, sans-serif",
    body: "'Capital Work Sans', ui-sans-serif, system-ui, sans-serif",
  },
  radius: {
    sm: "0.25rem",
    md: "0.75rem",
    lg: "1rem",
  },
} as const;

export type Theme = typeof theme;
