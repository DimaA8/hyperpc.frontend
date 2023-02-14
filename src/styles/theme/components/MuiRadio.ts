import { ThemeOptions } from '@mui/material'
import { palette } from '../palette'

export const MuiRadio: ThemeOptions['components'] = {
  MuiRadio: {
    styleOverrides: {
      root: {

        '&.Mui-checked': {
          color: palette.secondary.main
        }
      },
    }
  }
}