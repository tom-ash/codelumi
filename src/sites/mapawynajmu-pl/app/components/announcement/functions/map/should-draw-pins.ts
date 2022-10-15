interface SetShouldDrawPinsProps {
  isPinsDrawn: boolean
  isMapInitialized: boolean
  listingsChanged: boolean
  changeControl(props: object): void
}

function setShouldDrawPins(props: SetShouldDrawPinsProps) {
  const {
    isPinsDrawn,
    isMapInitialized,
    listingsChanged,
    changeControl,
  } = props

  if (listingsChanged) changeControl({ shouldDrawPins: true })

  if (isPinsDrawn) return
  if (!isMapInitialized) return

  changeControl({ shouldDrawPins: true })
}

export default setShouldDrawPins
