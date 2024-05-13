import { PinBuilder } from '../../../../../../../../../shared/app/components/support/map-marker/map-marker'
import { categories } from '../../../../../constants/categories'
import { getPinContent } from '../../../../../functions/map/pins/get-pin-content'

export const pinBuilder: PinBuilder = params => {
  const { category, svgs } = params

  let svg
  if (category !== '') {
    const svgCategory = categories.find(categoryOn => categoryOn.number === +category)
    // @ts-ignore
    svg = svgs[svgCategory?.pin?.svg]

    if (svg) {
      return getPinContent(svg)
    }
  }

  return '?'
}
