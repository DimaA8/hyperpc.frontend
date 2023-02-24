import React, { 
  useCallback,
  useContext
} from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@mui/material'
import { CatalogContext } from '../../contexts/CatalogContext'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IFilter, IFilters } from 'types/computer'

interface Props {
  values: IFilter[],
  name: keyof IFilters
}

export const Filter = ({ name, values }: Props) => {
  const { activeFilterIds, setActiveFilterIds } = useContext(CatalogContext)

  const handleFilterChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value
    const checked = e.target.checked

    let newFilterIds: string[] = activeFilterIds[name];    

    if (checked) {
      // Добавить фильтр
      if (!activeFilterIds[name].includes(value)) {
        newFilterIds = [...activeFilterIds[name], value];
      }
    } else {
      // Удалить фильтр
      if (activeFilterIds[name].includes(value)) {
        newFilterIds = activeFilterIds[name].filter((id) => id !== value);
      }
    }

    setActiveFilterIds({
      ...activeFilterIds,
      [name]: newFilterIds
    })
  }, [activeFilterIds, setActiveFilterIds, name])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={name}
        id={name}
      >
        {name.toUpperCase()}
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup onChange={handleFilterChange}>
        {
          // Все значения фильтров
          values.map((value) => {
            return (
              <FormControlLabel 
                key={value.id}
                control={<Checkbox value={value.id} />} 
                label={value.name} 
              />
            )
          })
        }
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}