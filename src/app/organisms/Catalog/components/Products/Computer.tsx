import React from 'react'
import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AddToCart } from 'app/components/AddToCart';
import { IComputer } from 'types/computer';
import { AddToCompare } from 'app/components/AddToCompare';
interface Props {
  computer: IComputer
}

const Computer = ({ computer }: Props) => {
  return (
    <Card>
      <AddToCompare productId={computer.id} />
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
  )
}

export default Computer