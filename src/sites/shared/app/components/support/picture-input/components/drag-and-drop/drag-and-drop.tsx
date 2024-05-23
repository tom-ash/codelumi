import React from 'react'
import { SVG } from '../../../svg/svg'
import { buildPicturesFromFiles } from './functions/build-pictures-from-files'
import { Picture } from '../../types/picture.interface'
import { SetPictures } from '../../types/set-pictures.interface'

interface DragAndDropInterface {
  (props: {
    pictures: Picture[]
    multiple?: boolean
    limit?: number
    targetWidth?: number
    targetHeight?: number

    maxWidth?: number
    maxHeight?: number

    icon: string
    instructions: string
    setPictures: SetPictures
  }): React.ReactElement
}

export const DragAndDrop: DragAndDropInterface = props => {
  const { pictures, icon, multiple, limit, instructions, targetWidth, targetHeight, setPictures, maxWidth, maxHeight } =
    props

  return (
    <div className='drag-and-drop-container'>
      <div className='drag-and-drop'>
        <SVG name={icon} />
        <input
          type='file'
          multiple={multiple}
          onChange={e =>
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
        />
      </div>
      <p className='instructions'>{instructions}</p>
    </div>
  )
}
