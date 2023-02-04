import React from 'react'
import {
  Link,
  Container,
  Box,
  Typography,
  Button,
  Divider
} from '@mui/material'
import AbcIcon from '@mui/icons-material/Abc'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link as RouterLink } from 'react-router-dom'

export const ComponentsPage = () => {
  return (
    <Container>
      <Box paddingY={5}>
        <h1>Typogaphy</h1>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button</Typography>
        <Typography variant="caption">caption</Typography>
        <Typography variant="inherit">inherit</Typography>
        <Typography variant="overline">overline</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="small">small</Typography>
        <Typography variant="medium">medium</Typography>
        <Typography variant="large">large</Typography>
      </Box>
      <Box paddingY={5}>
        <h1>Links</h1>
        <Link href="#">Модели</Link>
        <Button component={RouterLink} to="/dev" startIcon={<AbcIcon />}>startIcon</Button>
        <Button component={RouterLink} to="/dev" endIcon={<AbcIcon />}>endIcon</Button>
        <Divider></Divider>
        <Button component={RouterLink} variant="text" to="/dev" startIcon={<ChevronLeftIcon />}>startIcon</Button>
        <Button component={RouterLink} variant="text" to="/dev" endIcon={<ChevronRightIcon />}>endIcon</Button>
        <Divider></Divider>
        <Button component={RouterLink} variant="text" color="secondary" to="/dev" startIcon={<ChevronLeftIcon />}>startIcon</Button>
        <Button component={RouterLink} variant="text" color="secondary" to="/dev" endIcon={<ChevronRightIcon />}>endIcon</Button>
      </Box>

      <Box paddingY={5}>
        <h1>Icons</h1>
        <AbcIcon />
      </Box>

      <Box paddingY={5}>
        <h1>Buttons</h1>
        <Button>Подробнее</Button>
      </Box>
    </Container>
  )
}