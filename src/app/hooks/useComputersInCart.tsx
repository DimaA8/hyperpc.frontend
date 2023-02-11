import { useState, useEffect } from 'react'
import { useAppSelector } from 'app/hooks'
import { Computer, useGetComputersQuery } from 'features/computers/computersApi'

/*
  Компьютеры в корзине

  return:
    Список компьютеров в корзине
*/

export const useComputersInCart = (): { computersInCart: Computer[] } => {
  const { data: computers } = useGetComputersQuery()
  const { productIds } = useAppSelector((state) => state.cart)
  const [computersInCart, setComputersInCart] = useState<Computer[]>([])

  useEffect(() => {
    if (!computers) return
    setComputersInCart(computers.filter((computer) => {
      return productIds.includes(computer.id) 
    }))
  }, [productIds, computers])

  return { computersInCart }
}