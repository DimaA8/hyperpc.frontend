import { useAppSelector } from "./useAppSelector"

export const useIsProductInCompare = (productId: string) => {
  const productIds = useAppSelector((state) => state.compare.productIds);
  return productIds.includes(productId);
}