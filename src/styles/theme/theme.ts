import { createTheme } from "@mui/material";
import { components } from "./components";
import { palette } from "./palette";

export const theme = createTheme({
  components,
  palette,
  spacing: (factor = 1) => `${factor * 0.5}rem`
})