import { removePins } from './remove-pins';
// import { drawPin } from '../../../../../../map-marker/functions/draw-pin';
import { PinBuilder } from '../../../../../types/pin-builder.interface';
import drawPin from './draw-pin';

interface DrawPinsParams {
  items: any; // TODO
  currentListingId: number;
  svgs: any; // TODO
  pinBuilder: PinBuilder;
  pinClassName: string;
}

export const drawPins = (params: DrawPinsParams) => {
  if (typeof window === 'undefined') return;

  const { items, svgs, currentListingId, pinBuilder, pinClassName } = params;

  // @ts-ignore
  let pins = [];

  // @ts-ignore
  items.map((item) => {
    // @ts-ignore
    pins.push(drawPin(pinBuilder({ ...item, svgs, currentListingId, pinClassName })));
  });

  // @ts-ignore
  removePins(window.pins || []);

  // @ts-ignore
  window.pins = pins;
};
