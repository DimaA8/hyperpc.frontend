import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { rem } from 'styles/theme/theme'

const PartnerLogo = styled('img')`
  max-width: ${rem(130)};
  margin-right: ${rem(32)};
`

export const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Container>
      <Grid container
        direction="row-reverse"
      >
        <Grid
          item md={4} xs={12}
          marginBottom={2}
          sx={
            isMobile ? {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            } : null
          }
        >
          <Typography>Официальные статусы</Typography>
          <Box>
            <PartnerLogo src="/images/components/footer/microsoft.png" alt="microsoft" />
            <PartnerLogo src="/images/components/footer/nvidia.png" alt="nvidia" />
            <PartnerLogo src="/images/components/footer/intel.png" alt="intel" />
          </Box>
        </Grid>
        <Grid
          item md={8} xs={12}
          sx={
            isMobile ? {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            } : null
          }
        >
          <Typography variant="small">© 2010-2023 HYPERPC. Все права защищены.</Typography>
          <Typography variant="small" color="text.disabled">"HYPERPC" - является товарным знаком ООО "ГИПЕРПК", зарегистрированным в России и других странах.</Typography>
          <Box display="flex"
            flexWrap="wrap"
          >
            <Link component={RouterLink} to="/legal-info/terms-of-use">Copyright</Link>
            <Box paddingX={1}>|</Box>
            <Link component={RouterLink} to="/legal-info/privacy-policy">Конфиденциальность</Link>
            <Box paddingX={1}>|</Box>
            <Link component={RouterLink} to="/legal-info/oferta">Публичная оферта</Link>
            <Box paddingX={1}>|</Box>
            <Link component={RouterLink} to="/legal-info/sitemap">Карта сайта</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}