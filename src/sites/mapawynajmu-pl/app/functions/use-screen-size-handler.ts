import { useContext, useEffect } from "react"
import { ReactReduxContext } from "react-redux"
import { screenSizeHandler } from "../../../shared/app/functions/screen/handlers/screen-size"

export const useScreenSizeHandler = () => {
  const { store } = useContext(ReactReduxContext)
  const { dispatch } = store

  useEffect(() => {
    screenSizeHandler({ dispatch })
    addEventListener('resize', () => screenSizeHandler({ dispatch }), false)
  }, [])
}
