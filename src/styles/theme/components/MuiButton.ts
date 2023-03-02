import { easing, ThemeOptions } from "@mui/material";
import { defaultTheme } from "../defaultTheme";
import { palette } from "../palette";
declare module '@mui/material/styles' {

  interface ButtonVariants {
    slide: React.CSSProperties;
  }

  interface ButtomVariantsOptions {
    slide?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    slide: true;
  }
  interface ButtonClasses {
    slide: React.CSSProperties;
  }
}

export const MuiButton: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        lineHeight: 1,
        borderRadius: 0
      },
      outlined: {
        backgroundColor: 'transparent',
        color: palette.text.secondary,
        border: '1px solid #444',
        transition: defaultTheme.transitions.create(['all'], {
          easing: defaultTheme.transitions.easing.easeIn,
          duration: defaultTheme.transitions.duration.short,
        }),

        '&:hover': {
          borderColor: '#5d5d5d'
        }
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
        padding: '0.25rem 0.625rem',
      },
      textSizeSmall: {
        fontSize: `${defaultTheme.spacing(1.25)}`,
        lineHeight: '2rem'
      },
      sizeMedium: {

      },
      sizeLarge: {
        fontSize: '0.875rem',
        lineHeight: '53px',
        padding: `0 ${defaultTheme.spacing(5)}`,

        [defaultTheme.breakpoints.down('md')]: {
          fontSize: `${defaultTheme.spacing(1.25)}`,
        }
      },
      textSizeMedium: {

      },
      textSizeLarge: {
        
      },
      slide: {
        background: `linear-gradient(75deg, ${palette.secondary.main} 0 25%, ${palette.primary.light} 25% 100%) no-repeat`,
        backgroundSize: '400% 100%',
        backgroundPosition: '25% 0px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',

        ":hover": {
          animation: 'h 0.3s both'
        },

        '@keyframes h': {
          '0%': {
            backgroundPosition: '25% 0'
          },
          '100%': {
            backgroundPosition: '0% 0'
          }
        }
      }
    },
    defaultProps: {
      variant: 'contained'
    }
  }
}