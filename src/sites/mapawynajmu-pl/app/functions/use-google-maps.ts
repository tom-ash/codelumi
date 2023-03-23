import { useContext, useEffect } from "react"
import { ReactReduxContext } from "react-redux"
import { loadGoogleMaps } from "./load-google-maps"

export const useGoogleMaps = () => {
  const { store } = useContext(ReactReduxContext)
  const { getState, dispatch } = store
  const { app } = getState()
  const { scripts } = app

  useEffect(() => {
    loadGoogleMaps({ scripts, dispatch })
  }, [])
}
