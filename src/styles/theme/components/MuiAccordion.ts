import { ThemeOptions } from '@mui/material'
import { palette } from '../palette'

export const MuiAccordion: ThemeOptions['components'] = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',

        '&:before': {
          backgroundColor: palette.primary.light
        }
      }
    }
  }
}