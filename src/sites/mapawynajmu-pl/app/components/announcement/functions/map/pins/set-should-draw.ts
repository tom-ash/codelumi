interface SetShouldDrawPinsProps {
  isPinsDrawn: boolean
  isMapInitialized: boolean
  changeControl(props: object): void
}

function setShouldDrawPins(props: SetShouldDrawPinsProps) {
  const { isPinsDrawn, isMapInitialized, changeControl } = props

  if (isPinsDrawn) return
  if (!isMapInitialized) return

  changeControl({ shouldDrawPins: true })
}

export default setShouldDrawPins
