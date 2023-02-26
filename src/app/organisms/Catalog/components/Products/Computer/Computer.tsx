import React, { useMemo } from 'react'
import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Box,
  Tooltip,
  Divider,
  Rating,
  Button,
  styled
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';
import { AddToCart } from 'app/components/AddToCart';
import { IComputer, Stock as StockType } from 'types/computer';
import { AddToCompare } from 'app/components/AddToCompare';
import { rem } from 'styles/theme/theme';
import { useModal } from 'app/hooks/useModal';
import { FastbuyModal } from 'app/modals/FastbuyModal';

interface Props {
  computer: IComputer
}

const Root = styled(Card)(({ theme }) => ({

  '.add-to-compare': {
    opacity: 0,
    transition: theme.transitions.create(['opacity'])
  },

  '&:hover': {

    ".add-to-compare": {
      opacity: 1
    }
  }
}))

const Stock = ({
  stock
}: {
  stock: IComputer['stock']
}) => {
  if (stock === StockType.InStock) {
    return <Typography color="green">Есть в наличии</Typography>
  } else if (stock === StockType.Limited) {
    return <Typography color="orange">Ограничено</Typography>
  } else {
    return <Typography color="error">Нет в наличии</Typography>
  }
}

export const Computer = ({ computer }: Props) => {
  const [open, toggle, sepOpen, setClose] = useModal();

  const tooltipText = useMemo(
    () => `Общая стоимость ${computer.price} В том числе НДС ${Number(computer.price) * 0.2}`, 
    [computer.price]
  );

  return (
    <Root>
      <Box display="flex" justifyContent="flex-end">
        <AddToCompare productId={computer.id} />  
      </Box>
      
      <CardMedia component="img" 
        src={computer.image.src} 
        alt={computer.image.alt} 
      />
      <CardContent>
        <Typography variant="h2" component="h3">{computer.name}</Typography>
        <div>
          <Rating
            name="simple-controlled"
            value={computer.rating}
            readOnly
          />
          <Link component={RouterLink} to="#">({computer.reviewsCount}) отзывы</Link>
        </div>
        <Grid container>
          <Grid item xs={6} display="flex">
            <div>
              <Typography 
                variant="h4" 
                component="p" 
                marginRight={2}
              >
                Цена {computer.price} Р
              </Typography>
              <Link 
                component={RouterLink} 
                to={`credit-calculate?id=${computer.id}&price=${computer.price}`}
                fontSize={12}
                underline="always"
              >
                Рассчитать кредит
              </Link>
            </div>
            <Tooltip title={tooltipText}>
              <InfoIcon />
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <AddToCart productId={computer.id} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} display="flex">
            <Stock stock={computer.stock} />
          </Grid>
          <Grid item xs={6}>
            <Button variant="text" onClick={toggle} size="small">Купить в один клик</Button>
            <FastbuyModal open={open} onClose={setClose}/>
          </Grid>
        </Grid>
        <Divider sx={{ 
          marginTop: rem(16),
          marginBottom: rem(24) 
        }} />

        <Button 
          component={RouterLink} 
          to={`/catalog/computers/${computer.id}`}
          variant="outlined"
        >
          Подробнее
        </Button>

        <Divider sx={{ marginTop: rem(24) }} />
      </CardContent>
    </Root>
  )
}