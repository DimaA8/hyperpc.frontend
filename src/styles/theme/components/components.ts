import { ThemeOptions } from '@mui/material'
import { MuiCssBaseline } from './MuiCssBaseline'
import { MuiTypography } from './MuiTypography'
import { MuiLink } from './MuiLink'
import { MuiButton } from './MuiButton'
import { MuiIconButton } from './MuiIconButton'
import { MuiContainer } from './MuiContainer'
import { MuiDivider } from './MuiDivider'
import { MuiDrawer } from './MuiDrawer'
import { MuiAccordion } from './MuiAccordion'
import { MuiCheckbox } from './MuiCheckbox'
import { MuiAccordionSummary } from './MuiAccordionSummary'
import { MuiCardContent } from './MuiCardContent'
import { MuiCard } from './MuiCard'
import { MuiInputBase } from './MuiInputBase'
import { MuiOutlinedInput } from './MuiOutlinedInput'
import { MuiFormLabel } from './MuiFormLabel'
import { MuiRadio } from './MuiRadio'

export const components: ThemeOptions['components'] = {
  MuiCssBaseline,
  ...MuiTypography,
  ...MuiLink,
  ...MuiButton,
  ...MuiIconButton,
  ...MuiContainer,
  ...MuiDivider,
  ...MuiDrawer,
  ...MuiAccordion,
  ...MuiCheckbox,
  ...MuiAccordionSummary,
  ...MuiCardContent,
  ...MuiCard,
  ...MuiInputBase,
  ...MuiOutlinedInput,
  ...MuiFormLabel,
  ...MuiRadio
}