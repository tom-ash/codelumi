import { categories } from '../../../constants/categories'
import drawPin from './draw-pin'

function drawPins(currentListingId: number) {
  if (typeof window === 'undefined') return

  const {
    changeData,
    announcements,
    svgs,
    setControl,
    // @ts-ignore
  } = this.props

  // @ts-ignore
  let pins = []

  // @ts-ignore
  announcements.map(announcement => {
    // @ts-ignore
    const { changeRoute } = this.context
    const { id, category: categoryNumber, latitude, longitude, path } = announcement
    const category = categories.find(category => category.number === categoryNumber)
    // @ts-ignore
    const pin = category.pin
    const svg = svgs[pin.svg]
    const classNames = ['pin', 'icon']

    if (+currentListingId === +announcement.id) classNames.push('current')

    const htmlContent = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${svg && svg.viewBox}"
      >
        <path
          style="fill:#4D5656;"
          d="${svg && svg.pathData}"
        />
      </svg>`

    pins.push(
      drawPin({
        id,
        htmlContent,
        className: classNames.join(' '),
        latitude,
        longitude,
        path,
        setControl,
        changeData,
        changeRoute,
      })
    )
  })

  // @ts-ignore
  changeData({ pins })
}

export default drawPins
