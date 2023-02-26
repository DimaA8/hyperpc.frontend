import React, { useMemo } from 'react'
import {
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { IFilter, IFilters } from 'types/computer'

export const Value = ({
  value,
  filterName
}: {
  value: IFilter,
  filterName: keyof IFilters
}) => {
  const activeFilterIds = useAppSelector((state) => state.catalog.activeFilterIds);

  const checkbox = useMemo(() => {
    return (<Checkbox value={value.id} />);
  }, [value.id]);

  return (
    <FormControlLabel 
      control={checkbox} 
      label={value.name} 
    />
  )
}