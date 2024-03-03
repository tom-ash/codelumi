import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'

interface DrawPinProps {
  latitude: number
  longitude: number
  id: number
  htmlContent: string
  className: string
  href: string
  setControl(props: object): void
  setData(props: object): void
  isMobile: boolean
}

function drawPin(props: DrawPinProps) {
  const { latitude, longitude, id, htmlContent, className, href, setControl } = props

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

        // setControl({ currentTileId: id })
        changeUrl({ href, retainQueryParams: true, withScroll: false })
      },
    }
  )
}

export default drawPin
