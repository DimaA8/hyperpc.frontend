import { ThemeOptions } from "@mui/material";
import { palette } from "../palette";

export const MuiDrawer: ThemeOptions['components'] = {
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: palette.primary.main
      }
    }
  }
}