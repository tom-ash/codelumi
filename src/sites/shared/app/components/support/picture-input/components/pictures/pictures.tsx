import React from 'react'
import { Picture } from '../../types/picture.interface'
import { rotatePicture } from './functions/rotate-picture'
import { SVG } from '../../../svg/svg'
import { deletePicture } from './functions/delete-picture'
import { movePicture } from './functions/move-picture'
import { SetPictures } from '../../types/set-pictures.interface'

interface PicturesInterface {
  (params: {
    pictures: Picture[];
    setPictures: SetPictures;
  }): React.ReactElement
}

export const Pictures: PicturesInterface = (params) => {
  const { pictures, setPictures } = params

  return (
    <div className='blobs'>
      {(pictures || []).map((picture: Picture, index: number) => {
        const src = picture.objectUrl

        return (
          <div
            key={src}
            className={'picture'}
          >
            <img src={src} />
            <div className='buttons'>
              <div
                onClick={() => deletePicture({
                  pictures,
                  index,
                  setPictures,
                })}
                className='button delete'
              >
                <SVG name='close' />
              </div>
              {index !== 0 && (
                <div
                  onClick={() => movePicture({
                    pictures,
                    direction: 'up',
                    index,
                    setPictures,
                  })}
                  className='button up'
                >
                  <SVG name='chevron' />
                </div>
              )}
              {pictures.length !== index + 1 && (
                <div
                  onClick={() => movePicture({
                    pictures,
                    direction: 'down',
                    index,
                    setPictures,
                  })}
                  className='button down'
                >
                  <SVG name='chevron' />
                </div>
              )}
              {!picture.database && (
                <div
                  onClick={() => rotatePicture({
                    pictures,
                    index,
                    setPictures,
                  })}
                  className='button rotate'
                >
                  <SVG name='rotate' />
                </div>
              )}
            </div>
          </div>
        )
      })}
      <div style={{ clear: 'both' }} />
    </div>
  )
}
