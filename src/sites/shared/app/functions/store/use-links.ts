import { useSelector } from "react-redux"
import { Store, StoreObject } from "../root-reducer/root-reducer"

interface UseLinks {
  (): StoreObject
}

export const useLinks: UseLinks = () => {
  const render = useSelector((state: Store) => state.links)

  return render
}
