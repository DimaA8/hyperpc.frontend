import React, { useContext } from 'react'
import { 
  Modal,
  Fade
} from '@mui/material'
import { MCContext } from 'app/organisms/ModalController/ModalControllerContext'
interface Props {
  isOpen: boolean
}

export const LocationModal = ({ isOpen }: Props) => {
  const modalController = useContext(MCContext)

  return (
    <Modal open={isOpen}
      onClose={modalController?.closeActiveModal}
    >
      <Fade><>LocationModal</></Fade>
    </Modal>
  )
}
export default LocationModal