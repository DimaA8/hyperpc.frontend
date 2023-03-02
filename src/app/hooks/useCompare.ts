
import { IComputer } from "types/computer"
import { useAppDispatch } from "./useAppDispatch"
import { addProduct, removeProduct } from "features/compare/compareSlice"

export const useCompare = (computerId: IComputer['id']) => {
  const dispatch = useAppDispatch();

  const addToCompare = () => {
    dispatch(addProduct(computerId));
  }

  const removeFromCompare = () => {
    dispatch(removeProduct(computerId));
  }
  
  return {
    addToCompare,
    removeFromCompare
  }
}