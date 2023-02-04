import React, { useState } from 'react'
import { 
  InputBase,
  IconButton,
  Box,
  useTheme
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { rem } from 'styles/theme/theme'

export const Search = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Box
      position="relative"
      width={rem(40)}
      height={rem(40)}
    >
      <Box
        position="absolute"
        top="0"
        right="0"
        display="flex"
        alignItems="center"
        bgcolor="primary.light"
      >
        <IconButton 
          onClick={toggleOpen}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Введите текст для поиска..."
          sx={{
            width: open ? rem(260) : 0,
            transition: theme.transitions.create(['width'])
          }}
        />
        <IconButton 
          onClick={toggleOpen}
          aria-label="close"
          sx={{
            display: open ? 'block' : 'none',
            width: open ? 'auto' : 0,
            transition: theme.transitions.create(['width'])
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  )
}