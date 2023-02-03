import { ThemeOptions } from '@mui/material'
import { MuiCssBaseline } from './MuiCssBaseline'
import { MuiTypography } from './MuiTypography'
import { MuiLink } from './MuiLink'
import { MuiButton } from './MuiButton'
import { MuiIconButton } from './MuiIconButton'
import { MuiContainer } from './MuiContainer'
import { MuiDivider } from './MuiDivider'

export const components: ThemeOptions['components'] = {
  MuiCssBaseline,
  ...MuiTypography,
  ...MuiLink,
  ...MuiButton,
  ...MuiIconButton,
  ...MuiContainer,
  ...MuiDivider
}