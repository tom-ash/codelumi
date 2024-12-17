import { getPinContent } from '../../../../../../../../../../mapawynajmu-pl/tracks/listings/common/helpers/map/pins/get-pin-content';
import { PinBuilder } from '../../../../../../../../../../../common/components/support/map-marker/map-marker';

export const pinBuilder: PinBuilder = (params) => {
  const { industryIcon, svgs } = params;

  const svg = svgs[industryIcon];

  if (svg) {
    return getPinContent(svg);
  }

  return '?';
};
