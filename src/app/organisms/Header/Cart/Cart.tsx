import React from 'react'
import { 
  Box,
  Typography,
  Button,
  Link
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useComputersInCart } from 'app/hooks/useComputersInCart'
import { rem } from 'styles/theme/theme'

export const Cart = () => {
  const { computersInCart } = useComputersInCart()

  const computersView = computersInCart.slice(0, 3).map((computer) => (
    <Link 
      component={RouterLink}
      to={`/catalog/computers/${computer.id}`}
    >
      <Box display='flex' 
        alignItems="center"
        key={computer.id}
      >
        <img 
          src={computer.image.src} 
          alt={computer.image.alt}
          style={{
            width: rem(80)
          }}
        />
        <Typography 
          variant="h6" 
          component="p"
        >
          {computer.name}
        </Typography>
      </Box>
    </Link>
  ))

  const moreCount = computersInCart.length > 3 ? (
    <Typography variant="small">...и еще {computersInCart.length - 3}</Typography>
  ) : null

  return (
    <Box>
      {computersView}
      {moreCount}
      <Button
        component={RouterLink}
        to="/cart"
        size="medium"
        fullWidth
      >
        Переидти в корзину
      </Button>
    </Box>
  )
}