import { ThemeOptions } from "@mui/material"
import { defaultTheme } from "../defaultTheme"
import { palette } from '../palette'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    small: React.CSSProperties;
    medium: React.CSSProperties;
    large: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    small?: React.CSSProperties;
    medium?: React.CSSProperties;
    large?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    small: true;
    medium: true;
    large: true;
  }

  interface TypographyClasses {
    small: React.CSSProperties;
    medium: React.CSSProperties;
    large: React.CSSProperties;
  }
}

export const MuiTypography: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: '2.625rem',
        lineHeight: '1.2',
        color: palette?.text?.secondary,

        [defaultTheme.breakpoints.down('md')]: {
          fontSize: '2.2313rem',
        }
      },
      h2: {
        fontSize: '2rem',
        lineHeight: '1.3',
        color: palette?.text?.secondary,

        [defaultTheme.breakpoints.down('md')]: {
          fontSize: '1.7rem',
        }
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: '1.4',
        color: palette?.text?.secondary,
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: '1.2',
        color: palette?.text?.secondary,
      },
      h5: {
        fontSize: '1.125rem',
        lineHeight: '1.2',
        color: palette?.text?.secondary,
      },
      h6: {
        fontSize: '1rem',
        lineHeight: '1.4',
        color: palette?.text?.secondary,
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: '1.5'
      },
      medium: {
        fontSize: '1.125rem',
      },
      large: {
        fontSize: '1.5rem',
        lineHeight: '1.5'
      },
      subtitle1: {
        fontSize: '1.125rem',
      }
    },
    defaultProps: {
      variantMapping: {
        small: 'p',
        medium: 'p',
        large: 'p',
      }
    }
  }
}