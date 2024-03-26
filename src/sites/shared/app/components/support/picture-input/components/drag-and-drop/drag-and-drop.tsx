import React from 'react'
import { SVG } from '../../../svg/svg'
import { useDispatch } from 'react-redux'
import { setPictures } from './functions/set-pictures'
import { useInputs } from '../../../../../functions/store/use-inputs'

interface DragAndDropInterface {
  (props: {
    multiple?: boolean;
    limit?: number;
    targetWidth?: number;
    targetHeight?: number;
    icon: string;
    instructions: string;
  }): React.ReactElement
}

export const DragAndDrop: DragAndDropInterface = props => {
  const { icon, multiple, limit, instructions, targetWidth, targetHeight } = props

  const dispatch = useDispatch()
  const { pictures } = useInputs()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <div className='drag-and-drop-container'>
      <div className='drag-and-drop'>
        <SVG name={icon} />
        <input
          type='file'
          multiple={multiple}
          onChange={e => setPictures({
            e,
            limit,
            targetWidth,
            targetHeight,
            pictures,
            setInputs
          })}
        />
      </div>
      <p className='instructions'>{instructions}</p>
    </div>
  )
}
