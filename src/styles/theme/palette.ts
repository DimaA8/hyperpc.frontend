import { ThemeOptions, PaletteOptions } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    typography?: {
      link?: {
        primary: string;
      }
    },
  }
}

export const palette = {
  primary: {
    main: '#111111',
    light: '#222222',
  },
  secondary: {
    main: '#f51616',
    dark: '#de0a0a'
  },
  text: {
    primary: '#cccccc',
    disabled: '#999999',
    secondary: '#ffffff'
  },
  link: {
    primary: '#f51616',
    hover: '#de0a0a'
  }
}