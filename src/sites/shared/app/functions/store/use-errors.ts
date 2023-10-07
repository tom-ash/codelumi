import { useSelector } from 'react-redux'
import { Store, StoreObject } from '../root-reducer/root-reducer'

interface UseErrors {
  (): StoreObject
}

export const useErrors: UseErrors = () => {
  const render = useSelector((state: Store) => state.errors)

  return render
}
