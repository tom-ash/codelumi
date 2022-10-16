interface DrawPinProps {
  latitude: number
  longitude: number
}

function drawPin(props: DrawPinProps) {
  const {
    latitude,
    longitude,
  } = props

  const htmlContent = 'ABC'

  // @ts-ignore
  return new window.pinCreator(
    {
      latitude, 
      longitude
    },
    {
      htmlContent,
      className: 'pin icon',
    }
  )
}

export default drawPin
