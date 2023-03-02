import React from 'react'
import {
  Box,
  Typography,
  ButtonBase,
  TextField,
  InputAdornment
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { rem } from 'styles/theme/theme'

export const Location = () => {
  return (
    <Box sx={{
      width: rem(450),
      padding: rem(20),
    }}
      bgcolor="primary.light"
      border="1px solid #2f2f2f"
    >
      <Typography>Начните вводить название своего города или выберите из списка ниже.</Typography>
      <TextField 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          )
        }}
        fullWidth
      />
      <Box>
        <ButtonBase>Москва</ButtonBase>,
        <ButtonBase>Санкт-Петербург</ButtonBase>,
        <ButtonBase>Новосибирск</ButtonBase>,
        <ButtonBase>Екатеринбург</ButtonBase>,
        <ButtonBase>Нижний Новгород</ButtonBase>,
        <ButtonBase>Казань</ButtonBase>,
        <ButtonBase>Челябинск</ButtonBase>,
        <ButtonBase>Омск</ButtonBase>,
        <ButtonBase>Самара</ButtonBase>,
        <ButtonBase>Ростов-на-Дону</ButtonBase>,
        <ButtonBase>Уфа</ButtonBase>,
        <ButtonBase>Красноярск</ButtonBase>,
        <ButtonBase>Краснодар</ButtonBase>,
        <ButtonBase>Пермь</ButtonBase>,
        <ButtonBase>Воронеж</ButtonBase>,
        <ButtonBase>Волгоград</ButtonBase>,
      </Box>
    </Box>
  )
}