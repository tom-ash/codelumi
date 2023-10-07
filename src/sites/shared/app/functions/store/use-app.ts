import { useSelector } from 'react-redux'
import { Store, StoreObject } from '../root-reducer/root-reducer'

interface UseApp {
  (): StoreObject
}

export const useApp: UseApp = () => {
  const render = useSelector((state: Store) => state.app)

  return render
}
