import React, { useReducer } from 'react'
import { 
  MCContextState,
  MCContext,
  MCContextInitial,
  ModalTypes,
  modalControllerCreate,
  reducer
} from './ModalControllerContext'
import LocationModal from 'app/modals/LocationModal'

interface Props {
  children: JSX.Element[]
}

export const ModalController = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, MCContextInitial)

  // Открыть активную модалку
  const openActiveModal = (modal: ModalTypes) => {
    dispatch({
      type: "SET_MODAL",
      payload: modal
    })
  }

  // Закрыть модалку
  const closeActiveModal = () => {
    dispatch({
      type: "SET_MODAL",
      payload: null
    })
  }

  const toggleActiveModal = (modal: ModalTypes) => {
    dispatch({
      type: "SET_MODAL",
      payload: state.modal ? null : modal
    })
  }

  const modalController = modalControllerCreate({
    openActiveModal,
    closeActiveModal,
    toggleActiveModal
  })

  return (
    <MCContextState.Provider value={state}>
      <MCContext.Provider value={modalController}>
        { children }
        <LocationModal isOpen={state.modal === 'location'} />
      </MCContext.Provider>
    </MCContextState.Provider>
  )
}