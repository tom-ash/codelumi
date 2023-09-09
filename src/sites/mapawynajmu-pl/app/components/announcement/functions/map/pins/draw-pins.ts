import { categories } from '../../../constants/categories'
import drawPin from './draw-pin'

interface DrawPins {
  (attrs: {
    listings: any; // TODO
    currentListingId: number;
    isMobile: boolean;
    svgs: any; // TODO
    setData: any; // TODO
    setControl: any; // TODO
  }): void
}

const drawPins: DrawPins = (attrs) => {
  if (typeof window === 'undefined') return

  const {
    isMobile,
    svgs,
    listings,
    currentListingId,
    setData,
    setControl,
  } = attrs

  // @ts-ignore
  let pins = []

  // @ts-ignore
  listings.map(announcement => {
    const { id, category: categoryNumber, latitude, longitude, path, isPromoted } = announcement
    const category = categories.find(category => category.number === categoryNumber)
    // @ts-ignore
    const pin = category.pin
    const svg = svgs[pin.svg]
    const classNames = ['pin', 'icon']

    if (+currentListingId === +announcement.id) {
      classNames.push('current')
    }

    if (isPromoted) {
      classNames.push('promoted')
    }

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
        isMobile,
        id,
        htmlContent,
        className: classNames.join(' '),
        latitude,
        longitude,
        path,
        setControl,
        setData,
      })
    )
  })

  // @ts-ignore
  setData({ pins })
}

export default drawPins
