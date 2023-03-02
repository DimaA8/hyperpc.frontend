import React, { useContext } from 'react'
import {
  Box,
  Button,
  Typography
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { MCContext } from 'app/organisms/ModalController/ModalControllerContext'

export const MobileLocation = () => {
  const modalController = useContext(MCContext)

  const toggleModal = () => {
    modalController?.toggleActiveModal('location')
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