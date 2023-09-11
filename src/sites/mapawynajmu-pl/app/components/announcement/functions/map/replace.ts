import mapOptionsProvider, { MapOptions } from './options-provider'

interface ReplaceMapProps {
  mapOptions: MapOptions
  isMobile: boolean
}

function replaceMap(props: ReplaceMapProps) {
  const { mapOptions, isMobile } = props

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
    })
  )
}

export default replaceMap
