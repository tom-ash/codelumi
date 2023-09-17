import { useSelector } from "react-redux"
import { Store, StoreObject } from "../root-reducer/root-reducer"

interface UseTexts {
  (): StoreObject
}

export const useTexts: UseTexts = () => {
  const render = useSelector((state: Store) => state.texts)

  return render
}
