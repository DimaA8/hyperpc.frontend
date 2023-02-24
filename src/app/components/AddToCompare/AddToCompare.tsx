import React, { useCallback } from 'react'
import { Button, ButtonProps } from '../Button';
import { 
  useAppDispatch,
  useIsProductInCompare 
} from 'app/hooks';
import { addProduct, removeProduct } from 'features/compare/compareSlice';
import MenuIcon from '@mui/icons-material/Menu';
import { IComputer } from 'types/computer';

type Props = ButtonProps & {
  productId: IComputer['id'];
}

export const AddToCompare = ({ productId, ...rest }: Props) => {
  const dispatch = useAppDispatch();
  const isProductInCompare = useIsProductInCompare(productId);

  const addToCompare = useCallback(() => {
    dispatch(addProduct(productId));
  }, [dispatch, productId]);

  const removeFromCompare = useCallback(() => {
    dispatch(removeProduct(productId));
  }, [dispatch, productId]);

  if (isProductInCompare) {
    return (
      <Button 
        onClick={removeFromCompare} 
        className="add-to-compare"
        variant="outlined"
        startIcon={<MenuIcon color="secondary" />}
        data-testid="remove-from-compare"
        {...rest}
      >
        В сравнении
      </Button>
    )
  }

  return (
    <Button 
      onClick={addToCompare}
      className="add-to-compare"
      variant="outlined"
      data-testid="add-to-compare"
      startIcon={<MenuIcon />}
      {...rest}
    >
      Сравнить
    </Button>
  )
}