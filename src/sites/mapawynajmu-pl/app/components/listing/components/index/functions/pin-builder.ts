import { PinBuilder } from "../../../../../../../shared/app/components/support/map-index/types/pin-builder.interface";
import { categories } from "../../../constants/categories";

export const pinBuilder: PinBuilder = (props) => {
  const { id, category: categoryNumber, latitude, longitude, href, isPromoted, svgs, currentListingId } = props
  const category = categories.find(category => category.number === categoryNumber)
  // @ts-ignore
  const pin = category.pin
  const svg = svgs[pin.svg]
  const classNames = ['pin', 'icon']

  if (+currentListingId === id) {
    classNames.push('current')
  }

  if (isPromoted) {
    classNames.push('promoted')
  }

  const className = classNames.join(' ')

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
    
  return ({
    id,
    latitude,
    longitude,
    htmlContent,
    className,
    href,
  })
}
