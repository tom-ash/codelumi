import React from 'react';
import { Picture } from '../../types/picture.interface';
import { rotatePicture } from './functions/rotate-picture';
import { SVG } from '../../../svg/svg';
import { deletePicture } from './functions/delete-picture';
import { movePicture } from './functions/move-picture';
import { SetPictures } from '../../types/set-pictures.interface';
import { Styles } from '../../../../../../mapawynajmu-pl/types/styles';
import { SVGs } from '../../../../../types/asset';

interface PicturesProps {
  pictures: Picture[];
  setPictures: SetPictures;
  styles: Styles;
  svgs: SVGs;
}

export const Blobs = (props: PicturesProps) => {
  const { pictures, setPictures, styles, svgs } = props;

  return (
    <div className={styles.blobs}>
      {(pictures || []).map((picture: Picture, index: number) => {
        const src = picture.objectUrl;

        return (
          <div key={src} className={styles.blobContainer}>
            <img src={src} className={styles.blob} />
            <div className={styles.blobControls}>
              <div
                onClick={() =>
                  deletePicture({
                    pictures,
                    index,
                    setPictures,
                  })
                }
              >
                <SVG data={svgs['close']} className={styles.delete} />
              </div>
              {index !== 0 && (
                <div
                  onClick={() =>
                    movePicture({
                      pictures,
                      direction: 'up',
                      index,
                      setPictures,
                    })
                  }
                  className="button up"
                >
                  <SVG data={svgs['chevron']} className={styles.up} />
                </div>
              )}
              {pictures.length !== index + 1 && (
                <div
                  onClick={() =>
                    movePicture({
                      pictures,
                      direction: 'down',
                      index,
                      setPictures,
                    })
                  }
                  className="button down"
                >
                  <SVG data={svgs['chevron']} className={styles.down} />
                </div>
              )}
              {!picture.database && (
                <div
                  onClick={() =>
                    rotatePicture({
                      pictures,
                      index,
                      setPictures,
                    })
                  }
                  className="button rotate"
                >
                  <SVG data={svgs['rotate']} className={styles.rotate} />
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div style={{ clear: 'both' }} />
    </div>
  );
};
