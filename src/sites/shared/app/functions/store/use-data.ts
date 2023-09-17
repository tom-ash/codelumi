import { useSelector } from "react-redux"
import { Store, StoreObject } from "../root-reducer/root-reducer"

interface UseData {
  (): StoreObject
}

export const useData: UseData = () => {
  const render = useSelector((state: Store) => state.data)

  return render
}
