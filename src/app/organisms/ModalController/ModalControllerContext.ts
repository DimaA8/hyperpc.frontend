import React from 'react'

export type ModalTypes = 'location' | null

interface MCContextType {
  modal: ModalTypes
}
export const MCContextInitial: MCContextType = {
  modal: null,
}

export type DispatchType = React.Dispatch<ActionType<ModalTypes>>
export const ActionTypes = {
  SET_MODAL: 'SET_MODAL'
}
export interface ActionType<T> {
  type: keyof typeof ActionTypes,
  payload: T | null
}

export const modalControllerCreate = <T>(modalController: T) => (modalController)

export const MCContextState = React.createContext<MCContextType | undefined>(MCContextInitial)
export const MCContext = React.createContext<{
  openActiveModal: (modal: ModalTypes) => void;
  closeActiveModal: () => void;
  toggleActiveModal: (modal: ModalTypes) => void;
} | undefined>(undefined)


export const reducer = (state: MCContextType, action: ActionType<ModalTypes>): MCContextType => {
  switch (action.type) {
    case ActionTypes.SET_MODAL: {
      return {
        ...state,
        modal: action.payload
      }
    }
  }
  return state
}