import React, { 
  ChangeEvent, 
  useContext, 
  useState,
  useEffect,
  useMemo
} from 'react'
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CatalogContext } from '../../contexts/CatalogContext'
import { Computer, useGetComputersQuery } from 'features/computers/computersApi'

export interface FiltersType extends Object {
  videocards: string[];
  boards: string[];
  procGens: string[];
  stylings: string[];
}

type Props = {
  computers: Computer[]
}

export const Filters = ({ computers }: Props) => {
  const { filters, setFilters } = useContext(CatalogContext)
  const [ allFilters, setAllFilters ] = useState<FiltersType>({
    videocards: [],
    boards: [],
    procGens: [],
    stylings: [],
  })

  useEffect(() => {
    if (!computers.length) return

    const newAllFilters: FiltersType = {
      videocards: [],
      boards: [],
      procGens: [],
      stylings: [],
    }

    // Все различные значения фильтров из полученных компьютеров
    computers?.forEach((computer) => {
      if (!newAllFilters.videocards.includes(computer.videocard)) newAllFilters.videocards.push(computer.videocard)
      if (!newAllFilters.boards.includes(computer.board)) newAllFilters.boards.push(computer.board)
      if (!newAllFilters.procGens.includes(computer.procGen)) newAllFilters.procGens.push(computer.procGen)
      if (!newAllFilters.stylings.includes(computer.styling)) newAllFilters.stylings.push(computer.styling)
    })

    setAllFilters(newAllFilters)

  }, [computers])

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filter: string
  ) => {
    const value = e.target.value
    const checked = e.target.checked

    let newValuesForFilter;
    if (checked) {
      // Добавить значение фильтра
      newValuesForFilter = [...(filters[filter as keyof FiltersType] as string[]), value]
    } else {
      // Удалить значение фильтра
      newValuesForFilter = (filters[filter as keyof FiltersType] as string[]).filter((v) => {
        return v !== value
      })
    }
    setFilters({
      ...filters,
      [filter]: newValuesForFilter
    })
  }

  // Все категории фильтров
  const filtersView = useMemo(() => (
    Object.entries(allFilters).map(([key, value]) => {
      return (
        <Accordion key={key}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={key}
            id={key}
          >
            {key.toUpperCase()}
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup onChange={(e) => handleFilterChange(e as ChangeEvent<HTMLInputElement>, key)}>
            {
              // Все значения фильтров
              Array.from((value as Set<string>)).map((filter) => {
                return (
                  <FormControlLabel 
                    key={filter}
                    control={<Checkbox value={filter} />} 
                    label={filter} 
                  />
                )
              })
            }
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      )
    })
  ), [ allFilters ]) 

  return (
    <Box>
      <form onSubmit={() => {}}>
        {filtersView}
      </form>
    </Box>
  )
}