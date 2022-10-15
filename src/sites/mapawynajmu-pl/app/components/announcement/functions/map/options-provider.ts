import googleMapStyles from '../../constants/google-map-styles'

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
}

const DEFAULT_OPTIONS = {
  center: {
    lat: 52,
    lng: 19,
  },
  zoom: 6.7,
  fullscreenControl: false,
  clickableIcons: false,
  zoomControl: false,
  styles: googleMapStyles,
  mapTypeControl: false,
  streetViewControl: false,
}

function mapOptionsProvider(props: MapOptionsProviderProps) {
  const {
    mapOptions,
    isMobile
  } = props

  return {
    ...DEFAULT_OPTIONS,
    ...!isMobile && { gestureHandling: 'greedy' },
    ...mapOptions
  }
}

export default mapOptionsProvider
