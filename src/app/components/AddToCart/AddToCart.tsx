import React from 'react'
import { Button } from 'app/components/Button'
import { Link } from 'app/components/Link'
import { Link as RouterLink } from 'react-router-dom'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import CheckIcon from '@mui/icons-material/Check'
import { addProduct } from 'features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'

interface Props {
  productId: number
}

export const AddToCart = ({ productId }: Props) => {
  const dispatch = useAppDispatch()
  const isInCart = useAppSelector((state) => state.cart.productIds.includes(productId))

  const addToCart = () => {
    dispatch(addProduct(productId))
  }

  // Товар в корзине
  if (isInCart) {
    return (
      <Button
        size="small"
        variant="contained"
        component={RouterLink}
        to="/cart"
        startIcon={<CheckIcon />}
        onClick={addToCart}
      >
        Оформить
      </Button>
    )
  }

  // Товар не в корзине
  return (
    <Button
      size="small"
      variant="slide"
      startIcon={<LocalGroceryStoreIcon />}
      onClick={addToCart}
    >
      В корзину
    </Button>
  )
}