import React from 'react'
import {
  Box,
  Link,
  styled
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Item = styled(RouterLink)`
  border-bottom: 1px solid ${({theme}) => theme.palette.primary.light};
  text-transform: uppercase;
  padding: ${({theme}) => theme.spacing(1.5)} 0;
`

export const MobileNav = () => {
  return (
    <Box 
      display="flex"
      flexDirection="column"
    >
      <Link component={Item} underline="none" to="/models">Модели</Link>
      <Link component={Item} underline="none" to="/catalog/computers">В наличии</Link>
      <Link component={Item} underline="none" to="/configurator">Конфигуратор</Link>
      <Link component={Item} underline="none" to="/assistance">Услуги</Link>
      <Link component={Item} underline="none" to="/support">Поддержка</Link>
      <Link component={Item} underline="none" to="/project">Проекты</Link>
      <Link component={Item} underline="none" to="/company">Компания</Link>
    </Box>
  )
}