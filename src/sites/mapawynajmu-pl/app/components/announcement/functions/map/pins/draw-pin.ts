interface DrawPinProps {
  latitude: number
  longitude: number
  id: number
  htmlContent: string
  className: string
  path: string
  setControl(props: object): void
  setData(props: object): void
  changeRoute(props: object): void
}

function drawPin(props: DrawPinProps) {
  const { latitude, longitude, id, htmlContent, className, path, setControl, setData, changeRoute } = props

  // @ts-ignore
  return new window.pinCreator(
    {
      latitude,
      longitude,
    },
    {
      pinId: `${id}`,
      htmlContent,
      className,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        setControl({
          mapOptions: {
            center: {
              lat: latitude,
              lng: longitude,
            },
            zoom: 12.4,
          },
        })

        setData({ tile: null, tileId: null })
        changeRoute({ href: path, withoutScroll: true })
      },
    }
  )
}

export default drawPin
