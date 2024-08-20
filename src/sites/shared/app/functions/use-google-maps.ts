import { useContext, useEffect } from 'react'
import { ReactReduxContext } from 'react-redux'
import { loadScript } from './scripts/load-script'
import { useApp } from './store/use-app'
import { initializeMap } from '../../../mapawynajmu-pl/app/components/listing/functions/map/initialize'
import { useControl } from './store/use-control'
import removePins from '../../../mapawynajmu-pl/app/components/listing/functions/map/pins/remove-pins'
import { MapStyles } from '../components/support/map-index/map-index'

export const useGoogleMaps = (params: { googleMapsApiKey: any; lang?: Lang; mapStyles?: MapStyles }) => {
  const { googleMapsApiKey, lang, mapStyles } = params
  const { store } = useContext(ReactReduxContext)
  const { dispatch } = store
  const setApp = (value: any) => dispatch({ type: 'app', value })
  const { scripts, isMobile } = useApp()
  const { mapOptions } = useControl()
  const { googleMaps } = scripts

  const langQuery = lang ? `&language=${lang}` : ''

  useEffect(() => {
    if (!googleMaps) {
      loadScript(`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places${langQuery}`).then(
        () => {
          const newScripts = { ...scripts, googleMaps: true }

          dispatch({ type: 'app', value: { scripts: newScripts } })
        }
      )
    }

    if (googleMaps) {
      initializeMap({
        mapOptions,
        isMobile,
        mapStyles,
      })

      setApp({ isMapInitialized: true })
    }

    return () => {
      // @ts-ignore
      const pins = window.pins

      if (pins) {
        removePins(pins)
      }
    }
  }, [googleMaps])
}
