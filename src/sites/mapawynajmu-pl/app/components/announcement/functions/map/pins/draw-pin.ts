import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'

interface DrawPinProps {
  latitude: number
  longitude: number
  id: number
  htmlContent: string
  className: string
  path: string
  setControl(props: object): void
  setData(props: object): void
}

function drawPin(props: DrawPinProps) {
  const { latitude, longitude, id, htmlContent, className, path, setControl, setData } = props

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
        changeUrl({ href: path, withScroll: false })
      },
    }
  )
}

export default drawPin
