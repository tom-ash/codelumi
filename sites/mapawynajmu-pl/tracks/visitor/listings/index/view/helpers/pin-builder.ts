import { SVGs } from '../../../../../../../common/types/asset';
import { categories } from '../../../common/constants/categories';

interface PinBuilderProps {
  id: number
  category: number
  latitude: number
  longitude: number;
  href: string;
  isPromoted: boolean
  svgs: SVGs;
  currentListingId: number;
  pinClassName: string;
  pinCurrentClassName: string;
  pinPromotedClassName: string;
}

interface PinData {
  id: number;
  latitude: number;
  longitude: number;
  htmlContent: string;
  className: string;
  href: string;
}

export interface PinBuilder {
  (props: PinBuilderProps): PinData
}

export const pinBuilder: PinBuilder = (props) => {
  const {
    id,
    category: categoryNumber,
    latitude,
    longitude,
    href,
    isPromoted,
    svgs,
    currentListingId,
    pinClassName,
    pinCurrentClassName,
    pinPromotedClassName,
  } = props;
  const category = categories.find(
    (category) => category.number === categoryNumber,
  );
  const pin = category!.pin; // TODO: !.
  const svg = svgs[pin.svg];
  const classNames = [pinClassName];

  if (+currentListingId === id) {
    classNames.push(pinCurrentClassName);
  }

  if (isPromoted) {
    classNames.push(pinPromotedClassName);
  }

  const className = classNames.join(' ');

  const htmlContent = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${svg && svg.viewBox}"
    >
      <path
        style="fill:#4D5656;"
        d="${svg && svg.pathData}"
      />
    </svg>`;

  return {
    id,
    latitude,
    longitude,
    htmlContent,
    className,
    href,
  };
};
