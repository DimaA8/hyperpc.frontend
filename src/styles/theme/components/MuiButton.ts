import { ThemeOptions } from "@mui/material";
import { defaultTheme } from "../defaultTheme";
import { palette } from "../palette";

export const MuiButton: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
      },
      contained: {
        backgroundColor: palette?.secondary?.main,

        '&:hover': {
          backgroundColor: palette.secondary.dark
        }
      },
      textPrimary: {
        color: palette.text.primary,
  
        '&:hover': {
          color: palette.text.secondary,
          textDecoration: 'underline'
        }
      },
      textSecondary: {
        color: palette.link.primary,

        '&:hover': {
          color: palette.link.hover,
          textDecoration: 'underline'
        }
      },
      sizeSmall: {
        padding: '0 0.625rem'
      },
      textSizeSmall: {
        fontSize: `${defaultTheme.spacing(1.25)}`,
        lineHeight: '2rem'
      },
      sizeMedium: {

      },
      textSizeMedium: {

      },
      textSizeLarge: {
        fontSize: '2rem',
        lineHeight: '53px',
        padding: `0 ${defaultTheme.spacing(5)}`,

        [defaultTheme.breakpoints.down('md')]: {
          fontSize: `${defaultTheme.spacing(1.25)}`,
        }
      }
    },
    defaultProps: {
      variant: 'contained'
    }
  }
}