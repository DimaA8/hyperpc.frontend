import React, { useState } from 'react'
import { FiltersType } from '../components/Filters/Filters'

interface CatalogContextType {
  filters: FiltersType,
  setFilters: (newFilters: FiltersType) => void
}

export const initialValue: CatalogContextType = {
  filters: { 
    videocards: [],
    procGens: [],
    boards: [],
    stylings: []
  },
  setFilters: () => {}
}

export const CatalogContext = React.createContext<CatalogContextType>(initialValue)


interface Props {
  children: JSX.Element[] | JSX.Element
}
export const CatalogProvider = ({ children }: Props) => {
  const [filters, setNewFilters] = useState<FiltersType>({ 
    videocards: [],
    procGens: [],
    boards: [],
    stylings: []
  })

  const setFilters = (newFilters: FiltersType) => {
    setNewFilters(newFilters)
  }

  return (
    <CatalogContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </CatalogContext.Provider>
  )

}