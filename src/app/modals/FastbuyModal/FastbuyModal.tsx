import React from 'react'
import {
  Modal,
  IconButton,
  Box
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { FastbuyForm } from 'app/components/FastbuyForm'

export const FastbuyModal = ({ 
  open,
  onClose
}: {
  open: boolean,
  onClose?: () => void
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box 
        maxWidth={600} 
        bgcolor="primary.main" 
        padding={4}
        position="absolute"
        left="50%"
        top="50%"
        sx={{
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <FastbuyForm />
      </Box>
    </Modal>
  )
}