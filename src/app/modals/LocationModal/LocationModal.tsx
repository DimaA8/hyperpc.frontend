import React from 'react'
import { 
  Modal,
  Fade
} from '@mui/material'

interface Props {
  isOpen: boolean
}

export const LocationModal = ({
  isOpen
}: Props) => {


  return (
    <Modal
      open={isOpen}
    >
      <Fade><>LocationModal</></Fade>
    </Modal>
  )
}