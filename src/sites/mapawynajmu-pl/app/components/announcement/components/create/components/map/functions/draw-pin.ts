import getPinContent from '../../../../../functions/map/pins/get-pin-content'
import { categories } from '../../../../../constants/categories'

interface DrawPinProps {
  latitude: number
  longitude: number
  svgs: object[]
  category: string
}

function drawPin(props: DrawPinProps) {
  const {
    latitude,
    longitude,
    svgs,
    category,
  } = props

  let svg
  let pinContent = '?'
  if (category !== '') {
    const svgCategory = categories.find(categoryOn => categoryOn.number ===  +category)
    // @ts-ignore
    svg = svgs[svgCategory.pin.svg]
  }

  if (svg) {
    pinContent = getPinContent(svg)
  }

  // @ts-ignore
  return new window.pinCreator(
    {
      latitude, 
      longitude
    },
    {
      htmlContent: pinContent,
      className: 'pin icon',
    }
  )
}

export default drawPin
