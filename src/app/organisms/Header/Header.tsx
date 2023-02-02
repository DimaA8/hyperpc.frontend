import React from 'react'
import {
  Grid,
  Box,
  Container,
  Link,
  Button,
  IconButton
} from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import SearchIcon from '@mui/icons-material/Search';
import { ReactSVG } from 'react-svg'
import { Link as RouterLink } from 'react-router-dom'
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <Box bgcolor="primary.light">
      <Container> 
        <Grid container 
          height="50px"
          alignItems="center"
        >
          <Grid item xs={2}>
            <ReactSVG src="hyperpc-logo-white.svg" />
          </Grid>
          <Grid item xs={6}>
            <Link component={RouterLink} to="/models">Модели</Link>
            <Link component={RouterLink} to="/catalog/computers">В наличии</Link>
            <Link component={RouterLink} to="/configurator">Конфигуратор</Link>
            <Link component={RouterLink} to="/assistance">Услуги</Link>
            <Link component={RouterLink} to="/support">Поддержка</Link>
            <Link component={RouterLink} to="/project">Проекты</Link>
            <Link component={RouterLink} to="/company">Компания</Link>
          </Grid>
          <Grid item xs={4}>
            <Button startIcon={<NearMeIcon />}>Чебоксары</Button>
            <Link href="tel:88007758235">8 (800) 775-82-35</Link>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <UserMenu />
          </Grid>
        </Grid>
          
      </Container>
    </Box>
  )
}