import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
    accentDark: "#2969a2",
    accentLight: "#5ea0c3",
    brand: "#6776b7",
    shadeDark: "#2c3642",
    shadeLight: "#f5f1f3",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
