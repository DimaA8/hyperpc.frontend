import React, { useState } from 'react'
import { TActiveFilterIds } from 'types/computer'

interface CatalogContextType {
  activeFilterIds: TActiveFilterIds,
  setActiveFilterIds: (newActiveFilterIds: TActiveFilterIds) => void
}

export const initialValue: CatalogContextType = {
  activeFilterIds: { 
    videocards: [],
    processors: [],
    boards: [],
    stylings: []
  },
  setActiveFilterIds: () => {}
}

export const CatalogContext = React.createContext<CatalogContextType>(initialValue)


interface Props {
  children: JSX.Element[] | JSX.Element
}
export const CatalogProvider = ({ children }: Props) => {
  const [activeFilterIds, setFilters] = useState<TActiveFilterIds>({ 
    videocards: [],
    processors: [],
    boards: [],
    stylings: []
  })

  const setActiveFilterIds = (newActiveFilterIds: TActiveFilterIds) => {
    setFilters(newActiveFilterIds)
  }

  return (
    <CatalogContext.Provider value={{
      activeFilterIds,
      setActiveFilterIds
    }}>
      {children}
    </CatalogContext.Provider>
  )

}