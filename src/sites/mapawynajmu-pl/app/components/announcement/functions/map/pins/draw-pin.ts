interface DrawPinProps {
  latitude: number
  longitude: number
  id: number
  htmlContent: string
  className: string
  path: string
  changeControl(props: object): void
  changeData(props: object): void
  changeRoute(props: object): void
}

// TODO: Add viewAnnouncement.

function drawPin(props: DrawPinProps) {
  const {
    latitude,
    longitude,
    id,
    htmlContent,
    className,
    path,
    changeControl,
    changeData,
    changeRoute,
  } = props

  // @ts-ignore
  return new window.pinCreator(
    {
      latitude, 
      longitude
    },
    {
      pinId: `${id}`,
      htmlContent,
      className,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        changeControl({
          mapOptions: {
            center: {
              lat: latitude,
              lng: longitude
            },
            zoom: 12.4
          }
        })

        changeData({ tile: null, tileId: null })
        changeRoute({ href: path, withoutScroll: true })
      }
    }
  )
}

export default drawPin
