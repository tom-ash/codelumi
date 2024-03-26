import React from 'react'
import { useInputs } from '../../../../../functions/store/use-inputs'
import { Picture } from '../types/picture.interface'
import { rotatePicture } from './functions/rotate-picture'
import { SVG } from '../../../svg/svg'
import { useDispatch } from 'react-redux'
import { deletePicture } from './functions/delete-picture'
import { movePicture } from './functions/move-picture'
import { FloatClear } from '../../../float-clear/float-clear'

interface BlobsInterface {
  (): React.ReactElement
}

export const Blobs: BlobsInterface = () => {
  const { pictures } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

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
                  setInputs,
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
                    setInputs,
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
                    setInputs,
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
                    setInputs,
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
