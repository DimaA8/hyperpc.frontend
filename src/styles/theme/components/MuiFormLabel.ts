import { ThemeOptions } from '@mui/material'
import { palette } from '../palette'

export const MuiFormLabel: ThemeOptions['components'] = {
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: palette.text.disabled,

        '&.Mui-focused:not(.Mui-error)': {
          color: palette.text.disabled,

        }
      },
      focused: {
      }
    }
  }
}