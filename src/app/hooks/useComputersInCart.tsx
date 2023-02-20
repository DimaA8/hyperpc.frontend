import { useState, useEffect } from 'react'
import { useAppSelector } from 'app/hooks'
import { useGetCatalogQuery } from 'features/catalog/catalogApi'
import { IComputer } from 'types/computer'

/*
  Компьютеры в корзине

  return:
    Список компьютеров в корзине
*/

export const useComputersInCart = (): { computersInCart: IComputer[] } => {
  const { data, isSuccess } = useGetCatalogQuery()
  const { productIds } = useAppSelector((state) => state.cart)
  const [computersInCart, setComputersInCart] = useState<IComputer[]>([])

  useEffect(() => {
    if (!isSuccess) return
    setComputersInCart(data.computers.filter((computer: IComputer) => {
      return productIds.includes(computer.id) 
    }))
  }, [productIds, data])

  return { computersInCart }
}