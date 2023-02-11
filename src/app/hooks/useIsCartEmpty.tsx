import { useState, useEffect } from "react";
import { useAppSelector } from ".";


/*
  Корзина пуста?

  return
    true - корзина пуста
    false - в противном случае
*/

export const useIsCartEmpty = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true)
  const { productIds } = useAppSelector((state) => state.cart)

  useEffect(() => {
    setIsCartEmpty(productIds.length === 0)
  }, [productIds])

  return { isCartEmpty }
}