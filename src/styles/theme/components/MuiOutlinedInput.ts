import { ThemeOptions } from '@mui/material'

export const MuiOutlinedInput: ThemeOptions['components'] = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        border: '1px solid #2a2a2a'
      },
    }
  }
}