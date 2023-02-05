import React, { useContext } from 'react'
import { 
  Modal,
  Fade,
  Box,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { MCContext } from 'app/organisms/ModalController/ModalControllerContext'
import { Location } from 'app/organisms/Location'
interface Props {
  isOpen: boolean
}

export const LocationModal = ({ isOpen }: Props) => {
  const modalController = useContext(MCContext)

  return (
    <Modal open={isOpen}
      onClose={modalController?.closeActiveModal}
    >
      <Fade in={isOpen}>
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              right: 0,
              top: 0
            }}
            onClick={modalController?.closeActiveModal}
          >
            <CloseIcon />
          </IconButton>
          <Location />
        </Box>
      </Fade>
    </Modal>
  )
}
export default LocationModal