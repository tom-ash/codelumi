import { useSelector } from 'react-redux'
import { Store, StoreObject } from '../root-reducer/root-reducer'

interface UseUser {
  (): StoreObject
}

export const useUser: UseUser = () => {
  const render = useSelector((state: Store) => state.user)

  return render
}
