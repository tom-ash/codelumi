interface SetShouldInitializeMapProps {
  isMapInitialized: boolean
  shouldInitializeMap: boolean
  googleMapsScriptLoaded: boolean
  changeControl(props: object): void
}

function setShouldInitializeMap(props: SetShouldInitializeMapProps) {
  const { isMapInitialized, shouldInitializeMap, googleMapsScriptLoaded, changeControl } = props

  if (isMapInitialized) return
  if (shouldInitializeMap) return
  if (!googleMapsScriptLoaded) return
  if (typeof window === 'undefined') return
  if (!document.getElementById('google-map')) return

  changeControl({ shouldInitializeMap: true })
}

export default setShouldInitializeMap
