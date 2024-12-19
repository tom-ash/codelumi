import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import { SectionHeading } from '../../../../../../../../../common/components/support/headings/section-heading';
import { PictureInput } from '../../../../../../../../../common/components/support/picture-input/picture-input';
import { SVGs } from '../../../../../../../../../common/types/asset';
import sectionStyles from '../../styles/section.module.css';
import styles from './pictures.module.css';

export const PICTURES_ID = 'pictures';

interface ListingsFormPicturesProps {
  heading: string;
  instructions: string;
  persistedPictures?: any[];
  listingId?: number;
  setInputs: SetInputs;
  setErrors: SetErrors;
  isError: boolean;
  svgs: SVGs;
}

export const ListingsFormPictures = (props: ListingsFormPicturesProps) => {
  const {
    heading,
    instructions,
    persistedPictures,
    listingId,
    setInputs,
    setErrors,
    isError,
    svgs,
  } = props;

  const classNames = [sectionStyles.section];
  if (isError) {
    classNames.push('error');
  }

  return (
    <div id={PICTURES_ID} className={classNames.join(' ')}>
      <SectionHeading value={heading} />
      <PictureInput
        multiple={true}
        limit={12}
        targetWidth={1200}
        targetHeight={768}
        icon="camera"
        instructions={instructions}
        persistedPictures={persistedPictures?.map(
          (persistedPicture: { database: string }) => {
            const { database } = persistedPicture;

            return {
              // @ts-ignore
              source: `${s3Url}/announcements/${listingId}/${database}`,
              database,
            };
          },
        )}
        // @ts-ignore
        onPictureSet={(pictures) => {
          setInputs({ pictures });
          setErrors({ isPicturesError: false });
        }}
        styles={styles}
        svgs={svgs}
      />
    </div>
  );
};
