import { MapStyles } from '../../../../../../shared/app/components/support/map-index/map-index'

export interface MapOptions {
  center: {
    lat: number
    lng: number
  }
  zoom: number
}

type MapOptionsProviderProps = {
  mapOptions: undefined | MapOptions
  isMobile: boolean
  mapStyles?: MapStyles
}

const DEFAULT_OPTIONS = {
  fullscreenControl: false,
  clickableIcons: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
}

function mapOptionsProvider(props: MapOptionsProviderProps) {
  const { mapOptions, isMobile, mapStyles } = props

  return {
    ...DEFAULT_OPTIONS,
    ...(!isMobile && { gestureHandling: 'greedy' }),
    ...mapOptions,
    styles: mapStyles,
  }
}

export default mapOptionsProvider
