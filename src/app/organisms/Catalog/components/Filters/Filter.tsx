import React, { useCallback, useMemo } from 'react'
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
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { toggleFilter } from '../../feature/catalogSlice'
import { Value } from './Value'
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

  // Все значения фильтров
  const valuesView = useMemo(() => {
    return values.map((value) => {
      return (<Value key={value.id} value={value} filterName={name} />)
    }
  )}
  , [values]);

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
          {valuesView}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}