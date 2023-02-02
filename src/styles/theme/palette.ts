import { ThemeOptions } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    typography?: {
      link?: {
        primary: string;
      }
    }
  }
}

export const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#111111',
    light: '#222222',
  },
  secondary: {
    main: '#f51616'
  },
  text: {
    primary: '#cccccc',
    disabled: '#999999',
    secondary: '#ffffff'
  },
  typography: {
    link: {
      primary: '#f51616'
    }
  }
}