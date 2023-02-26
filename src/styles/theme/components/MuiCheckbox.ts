import { ThemeOptions } from '@mui/material'
import { palette } from '../palette'

export const MuiCheckbox: ThemeOptions['components'] = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: palette.secondary.main,

        '&.Mui-checked': {
          color: palette.secondary.dark
        },
      },
    }
  },
}