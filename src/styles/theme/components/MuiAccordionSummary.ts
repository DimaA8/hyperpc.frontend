import { ThemeOptions } from '@mui/material'
import { palette } from '../palette'

export const MuiAccordionSummary: ThemeOptions['components'] = {
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        color: palette.text.primary,
      },

      expandIconWrapper: {
        color: palette.text.primary,

      }
    }
  }
}