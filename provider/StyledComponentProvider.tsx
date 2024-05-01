"use client";

import type { FC } from "react";
import { ThemeProvider } from "styled-components";

type PropsStyledComponentsProvider = Readonly<{
  children: React.ReactNode;
}>;

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const StyledComponentProvider: FC<PropsStyledComponentsProvider> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { StyledComponentProvider };
