import React, { useEffect, useState } from 'react';
import { DragAndDrop } from './components/drag-and-drop/drag-and-drop';
import { Blobs } from './components/blobs/blobs';
import { Picture } from './types/picture.interface';
import { PersistedPicture } from './types/persisted-picture.interface';
import { setCurrentPictures } from './functions/set-current-pictures';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';
import { SVGs } from '../../../types/asset';

interface PictureInputProps {
  multiple?: boolean;
  limit?: number;
  maxWidth?: number;
  maxHeight?: number;
  targetWidth?: number;
  targetHeight?: number;
  icon: string;
  instructions: string;
  persistedPictures?: PersistedPicture[];
  onPictureSet(pictures: Picture[]): void;
  required?: boolean;
  styles: Styles;
  svgs: SVGs;
}

export const PictureInput = (props: PictureInputProps) => {
  const {
    icon,
    limit,
    multiple,
    instructions,
    targetWidth,
    targetHeight,
    persistedPictures,
    onPictureSet,
    maxWidth,
    maxHeight,
    required = false,
    styles,
    svgs,
  } = props;

  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    if (persistedPictures) {
      setCurrentPictures({
        persistedPictures,
        setPictures,
      });
    }
  }, []);

  useEffect(() => {
    onPictureSet(pictures);
  }, [pictures]);

  return (
    <div className={styles.pictureInput}>
      <DragAndDrop
        pictures={pictures}
        multiple={multiple}
        limit={limit}
        targetWidth={targetWidth}
        targetHeight={targetHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        icon={icon}
        instructions={instructions}
        setPictures={setPictures}
        svgs={svgs}
        styles={styles}
      />
      <Blobs
        pictures={pictures}
        setPictures={setPictures}
        styles={styles}
        svgs={svgs}
      />
    </div>
  );
};
