import { useSelector } from "react-redux"
import { Store, StoreObject } from "../root-reducer/root-reducer"

interface UseControl {
  (): StoreObject
}

export const useControl: UseControl = () => {
  const render = useSelector((state: Store) => state.control)

  return render
}
