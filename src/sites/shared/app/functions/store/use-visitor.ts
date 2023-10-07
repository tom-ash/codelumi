import { useSelector } from 'react-redux'
import { Store, StoreObject } from '../root-reducer/root-reducer'

interface UseVisitor {
  (): StoreObject
}

export const useVisitor: UseVisitor = () => {
  const render = useSelector((state: Store) => state.visitor)

  return render
}
