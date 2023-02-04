import { ThemeOptions } from "@mui/material";
import { palette } from "../palette";

export const MuiIconButton: ThemeOptions['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: palette.text.primary
      },
    },
    defaultProps: {
      color: 'primary'
    }
  }
}