import type { Theme } from "../types/theme";

export function themeToCssVariables(theme: Theme): string {
  return `
    --color-primary: ${theme.colors.primary};
    --color-accent: ${theme.colors.accent};
    --color-background: ${theme.colors.background};
    --color-surface: ${theme.colors.surface};
    --color-text: ${theme.colors.text};
    --color-muted: ${theme.colors.muted};
    --color-border: ${theme.colors.border};
    --color-dark: ${theme.colors.dark};
    --color-white: ${theme.colors.white};
  `;
}
