import React, { useMemo } from 'react'
import {
  Box,
} from '@mui/material'
import { IFilters } from 'types/computer'
import { Filter } from './Filter'

type Props = {
  filters: IFilters
}

export const Filters = ({ filters }: Props) => {

  // Все категории фильтров
  const filtersView = useMemo(() => (
    <>
      <Filter name="videocards" values={filters.videocards} />
      <Filter name="processors" values={filters.boards} />
      <Filter name="boards" values={filters.stylings} />
      <Filter name="stylings" values={filters.processors} />
    </>
  ), [filters]) 

  return (
    <Box>
      <form onSubmit={() => {}}>
        {filtersView}
      </form>
    </Box>
  )
}