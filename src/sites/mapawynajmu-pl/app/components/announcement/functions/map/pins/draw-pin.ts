import { updateUrl } from '../../../../../../../shared/app/functions/routes/updaters/update-url'

interface DrawPinProps {
  latitude: number
  longitude: number
  id: number
  htmlContent: string
  className: string
  path: string
  setControl(props: object): void
  setData(props: object): void
  isMobile: boolean
}

function drawPin(props: DrawPinProps) {
  const { latitude, longitude, id, htmlContent, className, path, setControl } = props

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

        // @ts-ignore
        // console.log(this.props)

        // isMobile ? setControl({ currentTileId: id }) : zoomToPin

        // setControl({ currentTileId: id })
        updateUrl({ href: path, retainQueryParams: true, withScroll: false })
      },
    }
  )
}

export default drawPin
