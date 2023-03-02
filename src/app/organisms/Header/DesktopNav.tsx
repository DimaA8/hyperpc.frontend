import React from 'react'
import { 
  Box,
  Link,
  styled,
  css
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { rem } from 'styles/theme/theme'

interface ItemProps {
  isActive?: boolean;
}

const Item = styled(RouterLink)<ItemProps>`
  padding: 0 ${({theme}) => theme.spacing(2.5)};
  min-height: ${rem(50)};
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  transition: ${({theme}) => theme.transitions.create(['color'])};

  &:hover {
    color: ${({theme}) => theme.palette.text.secondary};
  }

  ${({isActive, theme}) => isActive ? css`
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${theme.palette.secondary.main};
    }
  `: null}
`

export const DesktopNav = () => {
  return (
    <Box display="flex">
      <Link component={Item} underline="none" isActive to="/models">Модели</Link>
      <Link component={Item} underline="none" to="/catalog/computers">В наличии</Link>
      <Link component={Item} underline="none" to="/configurator">Конфигуратор</Link>
      <Link component={Item} underline="none" to="/assistance">Услуги</Link>
      <Link component={Item} underline="none" to="/support">Поддержка</Link>
      <Link component={Item} underline="none" to="/project">Проекты</Link>
      <Link component={Item} underline="none" to="/company">Компания</Link>
    </Box>
  )
}