import { createTheme } from "@mui/material";
import { components } from "./components";
import { palette } from "./palette";

const FONT_SIZE = 16;

const createRem = (fontSize: number) => {
  return (px: number): string => {
    return `${Math.round(px * 1000 / fontSize) / 1000}rem`
  }
}
export const rem = createRem(FONT_SIZE)

export const theme = createTheme({
  components,
  palette,
  spacing: (factor = 1) => `${factor * 0.5}rem`
})