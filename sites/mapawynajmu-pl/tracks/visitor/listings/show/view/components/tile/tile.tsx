import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Picture } from '../../../../../../../../common/components/support/picture-input/types/picture.interface';
import { Styles } from '../../../../../../../types/styles';
import { Lang } from '../../../../../../common/types/lang';
import { Area } from '../../../../common/components/area/area';
import Heading from '../../../../common/components/heading/heading';
import { Rent } from '../../../../common/components/rent/rent';
import { Pictures } from '../../../../common/components/tile/components/pictures/pictures';
import { Link } from '../../../../../../../../common/components/support/link/link';
import { LinkData } from '../../../../../../../../../lib/types/link-data';

interface ListingsShowTileProps {
  category: number;
  lang: Lang;
  locality: string;
  sublocality?: string;
  styles: Styles;
  id: number;
  title: string;
  pictures: Picture[];
  area: number;
  grossRentAmount: number;
  rentCurrency: number;
  router: AppRouterInstance;
  rootLinkData: LinkData;
}

const ListingsShowTile = (props: ListingsShowTileProps) => {
  const {
    pictures,
    id,
    title,
    category,
    lang,
    locality,
    sublocality,
    styles,
    area,
    grossRentAmount,
    rentCurrency,
    rootLinkData,
  } = props;

  return (
    <div className={styles.showTile}>
      <Heading
        tier={1}
        category={category}
        lang={lang}
        locality={locality}
        sublocality={sublocality}
        styles={styles}
      />
      <Link data={rootLinkData} className={styles.rootLink} />
      <Pictures
        id={id}
        title={title}
        pictures={pictures}
        styles={styles}
        disableSlides={false}
      />
      <div className={styles.areaAndRent}>
        {area && (
          <Area
            // @ts-ignore
            area={area}
            className={styles.area}
          />
        )}
        {grossRentAmount && rentCurrency !== null && (
          <Rent
            // @ts-ignore
            rent={grossRentAmount}
            currency={rentCurrency}
            styles={styles}
          />
        )}
      </div>
    </div>
  );
};

export default ListingsShowTile;

// name?: string;
//  {/* {isPhoneable ? (
//  <ListerPhone {...listerPhoneProps} />
//  ) : (
//  <GoToLink {...goToLinkProps} />
//  )} */}
//  {/* <PrimaryData {...primaryDataProps} /> */}
//  {/* <Secondary
//  rooms={rooms}
//  category={category}
//  floor={floor}
//  totalFloors={totalFloors}
//  availabilityDate={availabilityDate}
//  {/* {features && features.length > 0 && <Items {...featuresProps} />} */}
//  {/* {furnishings && furnishings.length > 0 && (
//  <Items {...furnishingsProps} />
//  {/* {description && <Description {...descriptionProps} />} */}

// markListingAsViewed(id);
// const isPhoneable = [1, 2, 3, 4, 5].includes(category);
// const key = `listing-${id}`;
// const classNames = ['listing-show-tile'];
// if (isPromoted) {
//   classNames.push('promoted');
// }
// const className = classNames.join(' ');
