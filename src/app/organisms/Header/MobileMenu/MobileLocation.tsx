import React, { useState } from 'react'
import {
  Box,
  Button,
  Typography
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export const MobileLocation = () => {
  const [open, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button 
        startIcon={<LocationOnIcon />}
        variant="text"
        onClick={toggleModal}
        sx={{
          alignItems: 'start'
        }}
      >
        <Box>
          <Typography variant="medium" textTransform="none">Ваш город</Typography>
          <Typography textTransform="none">Чебоксары</Typography>
        </Box>
      </Button>
    </>
  )
}