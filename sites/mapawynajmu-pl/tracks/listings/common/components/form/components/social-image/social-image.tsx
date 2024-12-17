import { Picture } from '../../../../../../../../common/components/support/picture-input/types/picture.interface';
import { SocialImageCanvas } from '../../../../../../../../common/components/support/social-image-canvas/social-image-canvas';
import { Lang } from '../../../../../../common/types/lang';
import { Area } from '../../../area/area';
import Heading from '../../../heading/heading';
import { Rent } from '../../../rent/rent';
import styles from './social-image.module.css';

interface SocialImageProps {
  lang: Lang;
  pictures: Picture[];
  category: number;
  area: string;
  locality: string;
  sublocality: string;
  netRent: string;
  grossRent: string;
  rentCurrency: number;
}

export const SocialImage = (props: SocialImageProps) => {
  const {
    lang,
    pictures,
    category,
    area,
    locality,
    sublocality,
    // netRent, // TODO
    grossRent,
    rentCurrency,
  } = props;

  const previewPicture = Array.isArray(pictures) && pictures[0];

  if (!previewPicture || !category) {
    return null;
  }

  return (
    <SocialImageCanvas className={styles.preview}>
      <img src={previewPicture.objectUrl} />
      <Heading
        tier={2}
        lang={lang}
        category={category}
        locality={locality}
        sublocality={sublocality}
        styles={styles}
      />
      {area && <Area area={area} className={styles.area} />}
      {grossRent && (
        <Rent rent={grossRent} currency={rentCurrency} styles={styles} />
      )}
    </SocialImageCanvas>
  );
};
