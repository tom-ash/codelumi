import { useSelector } from "react-redux"
import { Store, StoreObject } from "../root-reducer/root-reducer"

interface useRender {
  (state: Store): StoreObject
}

export const useRender = () => {
  const render = useSelector((state: Store) => state.render)

  return render
}
