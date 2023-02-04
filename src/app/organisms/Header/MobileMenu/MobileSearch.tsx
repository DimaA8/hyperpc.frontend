import React from 'react'
import { 
  TextField,
  IconButton,
  Box,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const MobileSearch = () => {
  return (
    <Box
      position="relative"
    >
      <TextField
        placeholder="Введите текст для поиска..."
        variant="outlined"
        fullWidth
      />
      <IconButton 
        aria-label="search"
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  )
}