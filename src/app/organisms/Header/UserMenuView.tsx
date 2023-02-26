import React, { MouseEvent } from 'react'
import { 
  Box,
  Link,
  Divider,
  IconButton,
  styled
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom'
import { Cart } from './Cart';
import { useIsCartEmpty } from 'app/hooks';

interface Props {
  toggleOpen: (event: MouseEvent) => void
}

export const UserMenuView = ({
  toggleOpen
}: Props) => {
  const { isCartEmpty } = useIsCartEmpty()

  return (
    <Box bgcolor="primary.main"
      border="1px solid #2a2a2a"
      paddingX={3}
      paddingY={2}
      display="flex"
      flexDirection="column"
    >
      <Box display="flex"
        justifyContent="end"
      >
        <IconButton onClick={toggleOpen}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      {!isCartEmpty ? 
        <Box mb={2}>
          <Cart />
        </Box> :
        <Link component={RouterLink} to="/cart" marginBottom={1}>Корзина</Link>
      }
      <Link href="#load-configuration-modal" marginBottom={1}>Загрузить конфигурацию</Link>
      <Divider />
      <Link component={RouterLink} to="/account/configuration" marginBottom={1}>Мои конфигурации</Link>
      <Link component={RouterLink} to="/account/orders" marginBottom={1}>Мои заказы</Link>
      <Link component={RouterLink} to="/account/reviews" marginBottom={1}>Мои отзывы</Link>
      <Link href="/#login-form-modal" marginBottom={1}>Войти</Link>
    </Box>
  )
}