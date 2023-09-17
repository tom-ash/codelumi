import { useSelector } from "react-redux"
import { Store, StoreObject } from "../root-reducer/root-reducer"

interface UseInputs {
  (): StoreObject
}

export const useInputs: UseInputs = () => {
  const render = useSelector((state: Store) => state.inputs)

  return render
}
