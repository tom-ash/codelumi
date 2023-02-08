interface SetShouldDrawPinsProps {
  isPinsDrawn: boolean
  isMapInitialized: boolean
  setControl(props: object): void
}

function setShouldDrawPins(props: SetShouldDrawPinsProps) {
  const { isPinsDrawn, isMapInitialized, setControl } = props

  if (isPinsDrawn) return
  if (!isMapInitialized) return

  setControl({ shouldDrawPins: true })
}

export default setShouldDrawPins
