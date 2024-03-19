import { categories } from '../../../../../../mapawynajmu-pl/app/components/listing/constants/categories'
import { getPinContent } from '../../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/get-pin-content'
import removePins from '../../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/remove-pins'

interface DrawPinProps {
  latitude: number
  longitude: number
  svgs: object[]
  category: string
}

export const drawPin = (props: DrawPinProps) => {
  const { latitude, longitude, svgs, category } = props

  let svg
  let pinContent = '?'
  if (category !== '') {
    const svgCategory = categories.find(categoryOn => categoryOn.number === +category)
    // @ts-ignore
    svg = svgs[svgCategory?.pin?.svg]
  }

  if (svg) {
    pinContent = getPinContent(svg)
  }

  // @ts-ignore
  removePins(window.pins || [])

  // @ts-ignore
  window.pins = [
    // @ts-ignore
    new window.pinCreator(
      {
        latitude,
        longitude,
      },
      {
        htmlContent: pinContent,
        className: 'pin icon',
      }
    ),
  ]
}
