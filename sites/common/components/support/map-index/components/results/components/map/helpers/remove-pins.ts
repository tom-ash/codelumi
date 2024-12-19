import removePin from './remove-pin';

export function removePins(pins: object[]) {
  pins.map(removePin);

  for (let i = 0; i < pins.length; i++) {
    // @ts-ignore
    pins[i].setMap(null);
  }
}
