import React from 'react'
import { DragAndDrop } from './components/drag-and-drop/drag-and-drop'
import { Blobs } from './components/blobs/blobs'

interface PictureInputInterface {
  (props: {
    multiple?: boolean;
    limit?: number;
    targetWidth?: number;
    targetHeight?: number;
    icon: string;
    instructions: string;
  }): React.ReactElement
}

export const PictureInput: PictureInputInterface = props => {
  const { icon, limit, multiple, instructions, targetWidth, targetHeight } = props

  return (
    <div className='picture-input'>
      <DragAndDrop
        multiple={multiple}
        limit={limit}
        targetWidth={targetWidth}
        targetHeight={targetHeight}
        icon={icon}      
        instructions={instructions}
      />
      <Blobs />
    </div>
  )
}
