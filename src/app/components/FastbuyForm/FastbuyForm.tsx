import React from 'react'
import {
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
  name: '',
  number: ''
}

const validationSchema = yup.object({
  name: yup.string().min(1).max(50).required('Обязательное поле'),
  number: yup.string().matches(/^[0-9]+$/).min(11).max(11).required('Обязательное поле')
})

export const FastbuyForm = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {

      }}
    >
      {({
        handleSubmit,
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h3" textAlign="center" gutterBottom>Купить в один клик</Typography>
            <TextField 
              margin="normal"
              id="name"
              name="name"
              label="Ваше имя *"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField 
              margin="normal"
              id="number"
              name="number"
              label="Телефон для связи *"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
            />

            <Button type="submit" size="large">Отправить</Button>
            <Typography>Нажимая кнопку «Отправить», вы подтверждаете свое согласие на обработку персональных данных.</Typography>
          </Box>
        </form>
      )}
    </Formik>
  )
}