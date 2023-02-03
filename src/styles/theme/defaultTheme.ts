import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  spacing: (factor = 1) => `${factor * 0.5}rem`
})