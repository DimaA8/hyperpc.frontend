import React, { useCallback } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IFilter, IFilters } from 'types/computer'
import { useAppDispatch } from 'app/hooks'
import { toggleFilter } from '../../feature/catalogSlice'
interface Props {
  values: IFilter[],
  name: keyof IFilters
}

export const Filter = ({ name, values }: Props) => {
  const dispatch = useAppDispatch();

  const handleFilterChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;

    dispatch(toggleFilter({filter: name, id: value}));
  }, [name]);

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