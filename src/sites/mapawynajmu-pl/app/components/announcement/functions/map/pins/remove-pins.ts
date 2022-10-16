import removePin from "./remove-pin"

export function removePins(pins: object[]) {
  pins.map(removePin)
}

export default removePins
