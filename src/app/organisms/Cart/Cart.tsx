import React, { useMemo } from 'react'
import { 
  Typography,
  Box,
  Button,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Alert
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { RemoveFromCart } from 'app/components/RemoveFromCart'
import { useAppSelector, useComputersInCart } from 'app/hooks'
import { rem } from 'styles/theme/theme'

export const Cart = () => {
  const { computersInCart } = useComputersInCart()
  const cost = useMemo(() => {
    return computersInCart.reduce((cost, computer) => {
      return cost + +computer.price
    }, 0)
  }, [computersInCart])

  const rows = computersInCart.map((computer) => (
    <TableRow key={computer.id}>
      <TableCell>
        <Box display="flex" alignItems="center">
          <img 
            src={computer.image.src} 
            alt={computer.image.alt} 
            style={{
              width: rem(120)
            }}
          />
          <Typography variant="h5" component="p">{computer.name}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        {computer.stock === 2 ? 'Не в наличии' : 'В наличии'}
      </TableCell>
      <TableCell>
        1
      </TableCell>
      <TableCell>
        {computer.price}
      </TableCell>
      <TableCell>
        <RemoveFromCart productId={computer.id} />
      </TableCell>
    </TableRow>
  ))

  return (
    <Box>
      <Typography variant="h1" textAlign="center">Корзина</Typography>

      {rows.length ? (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ТОВАР</TableCell>
              <TableCell>Наличие</TableCell>
              <TableCell>Количество</TableCell>
              <TableCell>Цена</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
        <Typography variant="h2">ИТОГО: {cost} Р</Typography>
        <Button size="large" component={RouterLink} to="/cart/form">Перейти к оформлению</Button>
      </>
      ) : (
        <Alert icon={false} severity="warning">Ваша корзина пуста</Alert>
      )}      
    </Box>
  )
}