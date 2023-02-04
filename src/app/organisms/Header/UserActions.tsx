import React from 'react'
import {
  Link,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import { Location } from './Location'
import { Search } from './Search'

export const UserActions = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      {/* Местоположение */}
      {!isMobile ? <Location /> : null}

      {/* Телефон */}
      
      <Link href="tel:88007758235">
        {!isXs ? '8 (800) 775-82-35' : <PhoneIcon /> }
      </Link>

      {/* Поиск */}
      {!isMobile ? <Search /> : null}
    </>
  )
}