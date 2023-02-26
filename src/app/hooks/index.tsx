import { 
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import { 
  AppDispatch,
  RootState
} from 'app/store'

export { useComputersInCart } from './useComputersInCart'
export { useIsCartEmpty } from './useIsCartEmpty'
export { useIsProductInCompare } from './useIsProductInCompare' 

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector