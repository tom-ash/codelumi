// import removePins from '../../map-index/components/results/components/map/helpers/remove-pins';
import { removePins } from '../../map-index/components/results/components/map/helpers/remove-pins';
import { PinBuilder } from '../map-marker';

interface ItemProps {
  latitude: number;
  longitude: number;
  [key: string]: any;
}

interface DrawPin {
  item: ItemProps;
  pinBuilder: PinBuilder;
  className: string;
}

export const drawPin = (props: DrawPin) => {
  const { item, pinBuilder, className } = props;

  const { longitude, latitude } = item;

  const pinContent = pinBuilder({ ...item, className });

  // @ts-ignore
  removePins(window.pins || []);

  if (!(longitude && latitude)) {
    return;
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
      },
    ),
  ];
};
