import { useSelector } from 'react-redux'
import { Store, StoreObject } from '../root-reducer/root-reducer'

interface UseRender {
  (): StoreObject
}

export const useRender: UseRender = () => {
  const render = useSelector((state: Store) => state.render)

  return render
}
