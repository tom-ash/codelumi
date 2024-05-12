import { getPinContent } from "../../../../../../../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/get-pin-content"
import { PinBuilder } from "../../../../../../../../../../../shared/app/components/support/map-marker/map-marker"

export const pinBuilder: PinBuilder = (params) => {
  const {
    industryIcon,
    svgs,
  } = params

  const svg = svgs[industryIcon]

  if (svg) {
    return getPinContent(svg)
  }

  return '?'
}
