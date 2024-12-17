import React from 'react';
import { SVG } from '../../../svg/svg';
import { buildPicturesFromFiles } from './functions/build-pictures-from-files';
import { Picture } from '../../types/picture.interface';
import { SetPictures } from '../../types/set-pictures.interface';
import { SVGs } from '../../../../../types/asset';
import { Styles } from '../../../../../../mapawynajmu-pl/types/styles';

interface DragAndDropInterface {
  (props: {
    pictures: Picture[];
    multiple?: boolean;
    limit?: number;
    targetWidth?: number;
    targetHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    icon: string;
    instructions: string;
    setPictures: SetPictures;
    svgs: SVGs;
    styles: Styles;
  }): React.ReactElement;
}

export const DragAndDrop: DragAndDropInterface = (props) => {
  const {
    pictures,
    icon,
    multiple,
    limit,
    instructions,
    targetWidth,
    targetHeight,
    setPictures,
    maxWidth,
    maxHeight,
    svgs,
    styles,
  } = props;

  return (
    <div className={styles.dragAndDropContainer}>
      <div className={styles.dragAndDrop}>
        <SVG data={svgs['camera']} className={styles.icon} />
        <input
          type="file"
          multiple={multiple}
          onChange={(e) =>
            buildPicturesFromFiles({
              e,
              limit,
              targetWidth,
              targetHeight,
              maxWidth,
              maxHeight,
              pictures,
              setPictures,
            })
          }
          className={styles.dragAndDropInput}
        />
      </div>
      <p className="instructions">{instructions}</p>
    </div>
  );
};
