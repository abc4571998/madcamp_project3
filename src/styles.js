import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "#E7DDCF",
};
export const darkTheme = {
  fontColor: "#E7DDCF",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`${reset}`;
