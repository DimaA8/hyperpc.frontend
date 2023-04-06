import React from "react";
import {
  Container,
  TextField,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Typography,
  Button,
  Box,
  Alert,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { theme } from "styles/theme";
import { sendToServer as sendCartToServer } from "features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

export type CartFormType = {
  name: string;
  phone: string;
  email: string;
  method: "delivery" | "self";
  address?: string;
  marketId?: string;
  payment: "card" | "credit" | "cash" | "cashless";
};

const initialValues: CartFormType = {
  name: "",
  phone: "",
  email: "",
  method: "delivery",
  payment: "card",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .max(60, "Не более 60 символов")
    .required("Обязательное поле"),
  phone: yup
    .string()
    .matches(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      "Неверный формат"
    )
    .required("Обязательное поле"),
  email: yup
    .string()
    .email("Не корректный email")
    .required("Обязательное поле"),
  method: yup.string().oneOf(["delivery", "self"]),
  address: yup.string().when("method", {
    is: "delivery",
    then: (schema) =>
      schema.max(100, "Не более 100 символов").required("Обязательное поле"),
  }),
  marketId: yup.string().when("method", {
    is: "card",
    then: (schema) => schema.required("Обязательно поле"),
  }),
  payment: yup.string().oneOf(["card", "credit", "cash", "cashless"]),
});

export const CartForm = () => {
  const isMob = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();
  const { status, isSending } = useAppSelector((state) => state.cart);

  if (status === "success") {
    return (
      <Alert icon={false} severity="success">
        Заказ оформлен
      </Alert>
    );
  } else {
    return (
      <Container maxWidth="md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, formikHelpers) => {
            dispatch(sendCartToServer(values));
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            touched,
            errors,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                name="name"
                id="name"
                label="Имя *"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                margin="normal"
                fullWidth
                name="phone"
                id="phone"
                label="Телефон *"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
              <TextField
                margin="normal"
                fullWidth
                name="email"
                id="email"
                label="Email *"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Box>
                <FormControl
                  error={touched.method && Boolean(errors.method)}
                  margin="normal"
                >
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="delivery"
                    name="method"
                    onChange={(event, value) => {
                      handleChange(event);
                      if (values.payment === "cash") {
                        setFieldValue("payment", "card");
                      }
                    }}
                    value={values.method}
                  >
                    <FormControlLabel
                      value="delivery"
                      control={<Radio />}
                      label="Доставка"
                    />
                    <FormControlLabel
                      value="self"
                      control={<Radio />}
                      label="Самовывоз"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {values.method === "delivery" ? (
                <TextField
                  fullWidth
                  margin="normal"
                  name="address"
                  id="address"
                  label="Адрес *"
                  value={values.address || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
              ) : (
                <Box>
                  <FormControl
                    error={touched.marketId && Boolean(errors.marketId)}
                    margin="normal"
                  >
                    <FormLabel>Забрать из магазина</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="1"
                      name="marketId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.marketId}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              src="/images/map-teasers/map-teaser-50x57.jpg"
                              alt="Москва"
                            />
                            <Box ml={2}>
                              <Typography variant="h4">Москва</Typography>
                              <Typography>
                                ул. Складочная 1с1, подъезд №9, Пн-Пт 11:00 -
                                20:00
                              </Typography>
                              <Typography color="muted">
                                забрать сегодня
                              </Typography>
                            </Box>
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              )}
              <Box>
                <FormControl margin="normal">
                  <FormLabel>Методы оплаты</FormLabel>
                  <RadioGroup
                    defaultValue="card"
                    name="payment"
                    onChange={handleChange}
                    value={values.payment}
                  >
                    {values.method === "self" ? (
                      <FormControlLabel
                        value="cash"
                        control={<Radio />}
                        label="Наличными"
                      />
                    ) : null}
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label="Банковская карта"
                    />
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label="Кредит / Рассрочка"
                    />
                    <FormControlLabel
                      value="cashless"
                      control={<Radio />}
                      label={
                        <>
                          <Typography>Безналичный расчет</Typography>
                          <Typography color="warning">
                            только для юр. лиц
                          </Typography>
                        </>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box
                display="flex"
                flexDirection="row-reverse"
                justifyContent="center"
                flexWrap="wrap"
              >
                <Button
                  type="submit"
                  size="large"
                  sx={
                    isMob
                      ? {
                          marginBottom: "1rem",
                        }
                      : null
                  }
                  {...{ fullWidth: isMob }}
                >
                  {isSending ? <CircularProgress /> : null}
                  Оформить заказ
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/cart"
                  size="large"
                  {...{ fullWidth: isMob }}
                  sx={
                    !isMob
                      ? {
                          marginRight: "1rem",
                        }
                      : null
                  }
                >
                  Назад
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    );
  }
};
