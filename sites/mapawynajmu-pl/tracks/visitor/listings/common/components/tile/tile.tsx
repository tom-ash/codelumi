import { Styles } from '../../../../../../types/styles';
import { Area } from '../area/area';
import Heading from '../heading/heading';
import { Rent } from '../rent/rent';
import { Pictures } from './components/pictures/pictures';

interface Picture {
  database: string;
}

interface ListingsCommonTileProps {
  id: number;
  lang: string;
  href: string;
  category: number;
  title: string;
  asd: string;
  name?: string;
  locality: string;
  sublocality?: string;
  pictures: Picture[];
  disableSlides: boolean;
  area?: number;
  rentAmount?: number;
  rentCurrency?: number;
  isPromoted?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  loadImage?: boolean;
  className: string;
  primaryClassName: string;
  promotedClassName: string;
  styles: Styles;
  grossRentAmount: number | undefined;
}

export const ListingsCommonTile = (props: ListingsCommonTileProps) => {
  const {
    href,
    id,
    title,
    pictures,
    name,
    category,
    locality,
    sublocality,
    lang,
    rentCurrency,
    area,
    isPromoted,
    children,
    onClick,
    onMouseOver,
    onMouseLeave,
    disableSlides,
    loadImage,
    className,
    primaryClassName,
    promotedClassName,
    styles,
    grossRentAmount,
  } = props;

  const classNames = [className];
  if (isPromoted) {
    classNames.push(promotedClassName);
  }

  return (
    <a
      href={href}
      className={classNames.join(' ')}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      data-id={id}
      data-type="map-index-tile"
    >
      <Pictures
        id={id}
        title={title}
        pictures={pictures}
        disableSlides={disableSlides}
        loadImage={loadImage}
        styles={styles}
      />
      <div className={primaryClassName}>
        <Heading
          name={name}
          category={category}
          locality={locality}
          sublocality={sublocality}
          // @ts-ignore
          lang={lang}
          tier={2}
          styles={styles}
        />
        {/* @ts-ignore */}
        {area && <Area area={area} className={styles.area} />}
        {grossRentAmount && rentCurrency !== undefined && (
          // @ts-ignore
          <Rent
            // @ts-ignore
            rent={grossRentAmount}
            currency={rentCurrency}
            styles={styles}
          />
        )}
      </div>
      {children}
    </a>
  );
};
