import mapOptionsProvider, { MapOptions } from './options-provider'

interface ReplaceMapProps {
  mapOptions: MapOptions
  isMobile: boolean
}

export function replaceMap(props: ReplaceMapProps) {
  const {
    mapOptions,
    isMobile,
  } = props
  
  const googleMapContainer = document.getElementById('google-map-container')
  if (!googleMapContainer) return

  // @ts-ignore
  const map = window.googleMap

  // @ts-ignore
  googleMapContainer.replaceChild(map.getDiv(), document.getElementById('google-map'))

  map.setOptions(mapOptionsProvider({
    mapOptions,
    isMobile,
  }))
}