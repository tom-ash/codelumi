import { MapStyles } from '../../../../../../shared/app/components/support/map-index/map-index'
import mapOptionsProvider, { MapOptions } from './options-provider'

interface ReplaceMapProps {
  mapOptions: MapOptions
  isMobile: boolean
  mapStyles?: MapStyles
}

function replaceMap(props: ReplaceMapProps) {
  const { mapOptions, isMobile, mapStyles } = props

  const googleMapContainer = document.getElementById('google-map-container')
  if (!googleMapContainer) return

  // @ts-ignore
  const map = window.googleMap

  // @ts-ignore
  googleMapContainer.replaceChild(map.getDiv(), document.getElementById('google-map'))

  // @ts-ignore
  map.setOptions(
    // @ts-ignore
    mapOptionsProvider({
      mapOptions,
      isMobile,
      mapStyles,
    })
  )
}

export default replaceMap
