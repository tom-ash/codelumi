import removePins from '../../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/remove-pins'
import { PinBuilder } from '../map-marker'

interface ItemProps {
  latitude: number
  longitude: number
  [key: string]: any
}

export const drawPin = (item: ItemProps, pinBuilder: PinBuilder) => {
  const {
    longitude,
    latitude,
  } = item

  const pinContent = pinBuilder(item)

  // @ts-ignore
  removePins(window.pins || [])

  if (!(longitude && latitude)) {
    return
  }

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
