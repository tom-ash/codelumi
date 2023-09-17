interface SetShouldInitializeMapProps {
  isMapInitialized: boolean
  shouldInitializeMap: boolean
  googleMapsScriptLoaded: boolean
  setControl(props: object): void
}

function setShouldInitializeMap(props: SetShouldInitializeMapProps) {
  const { isMapInitialized, shouldInitializeMap, googleMapsScriptLoaded, setControl } = props

  if (isMapInitialized) return
  if (shouldInitializeMap) return
  if (!googleMapsScriptLoaded) return
  if (typeof window === 'undefined') return
  if (!document.getElementById('google-map')) return

  setControl({ shouldInitializeMap: true })
}

export default setShouldInitializeMap
