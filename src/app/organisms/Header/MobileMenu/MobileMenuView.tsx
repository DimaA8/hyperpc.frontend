import React from 'react'
import {
  Box,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { rem } from 'styles/theme/theme'
import { MobileLocation } from './MobileLocation'
import { MobileSearch } from './MobileSearch'
import { MobileNav } from './MobileNav'

export const MobileMenuView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={
        isMobile ? {
          width: rem(250),
          padding: rem(20)
        } : {
          width: rem(350),
          padding: rem(40)
        }
      }
      width={rem(350)}
      padding={rem(40)}
    >
      {/* Местоположение */}
      <MobileLocation />

      <Divider />

      {/* Поиск */}
      <MobileSearch />

      {/* Меню */}
      <MobileNav />
    </Box>
  )
}