import React, { 
  useContext, 
  useState,
} from 'react'
import { 
  Box,
  Grid,
  Typography,
  Pagination
} from '@mui/material'
import { filterComputers, applyPagination } from '../../helpers';
import { IComputer } from 'types/computer';
import { Computer } from './Computer';
import { useAppSelector } from 'app/hooks';

type Props = {
  computers: IComputer[]
}

export const Products = ({ computers }: Props) => {
  const { activeFilterIds } = useAppSelector((state) => (state.catalog));

  const [page, setPage] = useState(1)

  const filteredComputers = filterComputers(computers, activeFilterIds)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const paginatedComputers = applyPagination(filteredComputers, page - 1, 6)

  // Все отфильтрованные компьюетры на текущей странице
  const computersView = paginatedComputers.length ? paginatedComputers.map((computer) => (
    <Grid item xs={4} key={computer.id}>
      <Computer computer={computer} />
    </Grid>
  )) : <Typography>Нет компьютеров</Typography>

  return (
    <Box>
      <Grid container rowSpacing={6}>
        {computersView}
      </Grid>
      <Pagination 
        onChange={handlePageChange}
        count={Math.round(filteredComputers.length / 6)} 
        showFirstButton
        showLastButton
      />
    </Box>
  )
}