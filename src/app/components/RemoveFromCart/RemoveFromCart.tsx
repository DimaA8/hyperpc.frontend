import React, { useCallback } from 'react'
import { IconButton, IconButtonProps } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch } from 'app/hooks';
import { removeProduct } from 'features/cart/cartSlice';

type Props = {
  productId: number
} & IconButtonProps

export const RemoveFromCart = ({ productId, ...rest }: Props) => {
  const dispatch = useAppDispatch()

  const removeFromCart = useCallback(() => {
    dispatch(removeProduct(productId))
  }, [productId])

  return (
    <IconButton 
      color="secondary"
      onClick={removeFromCart}
      {...rest}
    >
      <DeleteOutlineIcon />
    </IconButton>
  )
}