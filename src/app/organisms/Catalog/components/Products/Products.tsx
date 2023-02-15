import React, { useContext, useState } from 'react'
import { 
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
  Typography,
  Pagination
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useGetComputersQuery } from 'features/computers/computersApi'
import { CatalogContext } from '../../contexts/CatalogContext';
import { filterComputers, applyPagination } from '../../helpers';
import { AddToCart } from 'app/components/AddToCart';

export const Products = () => {
  const { data: computers = [] } = useGetComputersQuery()
  const { filters } = useContext(CatalogContext)
  const [page, setPage] = useState(1)

  const filteredComputers = filterComputers(computers, filters)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const paginatedComputers = applyPagination(filteredComputers, page - 1, 6)

  // Все отфильтрованные компьюетры на текущей странице
  const computersView = paginatedComputers.length ? paginatedComputers.map((computer) => (
    <Grid item xs={4} key={computer.id}>
      <Card>
        <CardMedia component="img" 
          src={computer.image.src} 
          alt={computer.image.alt} 
        />
        <CardContent>
          <Typography variant="h2" component="h3">{computer.name}</Typography>
          <Link component={RouterLink} to="#">({computer.reviewsCount}) отзывы</Link>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h4" component="p">{computer.price} Р</Typography>
            </Grid>
            <Grid item xs={6}>
              <AddToCart productId={computer.id} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )) : <Typography>Нет компьютеров</Typography>

  return (
    <Box>
      <Grid container>
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