import React, { useEffect, useState } from 'react'
import { DragAndDrop } from './components/drag-and-drop/drag-and-drop'
import { Pictures } from './components/pictures/pictures'
import { Picture } from './types/picture.interface';
import { PersistedPicture } from './types/persisted-picture.interface';
import { setCurrentPictures } from './functions/set-current-pictures';

interface PictureInputInterface {
  (props: {
    multiple?: boolean;
    limit?: number;
    targetWidth?: number;
    targetHeight?: number;
    icon: string;
    instructions: string;
    persistedPictures?: PersistedPicture[],
    onPictureSet(pictures: Picture[]): void
  }): React.ReactElement
}

export const PictureInput: PictureInputInterface = props => {
  const {
    icon,
    limit,
    multiple,
    instructions,
    targetWidth,
    targetHeight,
    persistedPictures,
    onPictureSet,
  } = props

  const [pictures, setPictures] = useState<Picture[]>([])

  useEffect(() => {
    if (persistedPictures) {
      setCurrentPictures({
        persistedPictures,
        setPictures,
      })
    }
  }, [])

  useEffect(() => {
    onPictureSet(pictures)
  }, [pictures])

  return (
    <div className='picture-input'>
      <DragAndDrop
        pictures={pictures}
        multiple={multiple}
        limit={limit}
        targetWidth={targetWidth}
        targetHeight={targetHeight}
        icon={icon}      
        instructions={instructions}
        setPictures={setPictures}
      />
      <Pictures
        pictures={pictures}
        setPictures={setPictures}
      />
    </div>
  )
}
