import { ThemeOptions } from "@mui/material";

export const MuiLink: ThemeOptions['components'] = {
  MuiLink: {
    styleOverrides: {
      root: {
        color: 'inherit'
      }
    },
    defaultProps: {
      underline: 'hover',
      variant: 'body1'
    }
  }
}