import { useContext, useEffect } from 'react'
import { ReactReduxContext } from 'react-redux'
import { loadScript } from './scripts/load-script'

export const useGoogleMapsFactory = (googleMapsApiKey: any) => {
  return () => {
    const { store } = useContext(ReactReduxContext)
    const { getState, dispatch } = store
    const { scripts } = getState()

    useEffect(() => {
      loadScript(`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&language=pl`).then(
        () => {
          const newScripts = { ...scripts, googleMaps: true }

          dispatch({ type: 'app', value: { scripts: newScripts } })
        }
      )
    }, [])
  }
}
