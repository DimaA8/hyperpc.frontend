import React from 'react'
import {
  Grid,
  Box,
  Container,
  Link,
  Button,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import SearchIcon from '@mui/icons-material/Search';
import { ReactSVG } from 'react-svg'
import { Link as RouterLink } from 'react-router-dom'
import { UserMenu } from './UserMenu';
import { DesktopNav } from './DesktopNav';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { UserActions } from './UserActions'; 

export const Header = () => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box bgcolor="primary.light">
      <Container> 
        <Grid container 
          height="50px"
          alignItems="center"
        >
          <Grid item xl={9} xs={7} display="flex" alignItems="center">
            <RouterLink to="/">
              <ReactSVG src="hyperpc-logo-white.svg" />
            </RouterLink>
            {!isTablet ? <DesktopNav /> : null}
          </Grid>
          <Grid item xl={3} xs={5} 
            display="flex" 
            justifyContent="end"
            alignItems="center"
          >
            <UserActions />
            <UserMenu />
            {isTablet ? <MobileMenu /> : null}
          </Grid>
        </Grid>
          
      </Container>
    </Box>
  )
}