import React from 'react'
import { SVG } from '../../../svg/svg'
import { SetFiles } from '../../types/set-files.interface'

interface DragAndDropInterface {
  (props: { files: File[]; limit: number; icon: string; instructions: string; setFiles: SetFiles }): React.ReactElement
}

export const DragAndDrop: DragAndDropInterface = props => {
  const { files, limit, icon, instructions, setFiles } = props

  return (
    <div className='drag-and-drop-container'>
      <div className='drag-and-drop'>
        <SVG name={icon} />
        <input
          type='file'
          multiple={limit > 1}
          onChange={e => {
            const addedFiles = e.target.files

            if (addedFiles) {
              const arrayedFiles = Array.from(addedFiles)

              if (limit === 1) {
                setFiles(arrayedFiles)
                return
              }

              const unusedLimit = limit - files.length
              if (unusedLimit <= 0) {
                return
              }

              const slicedAddedFiles = arrayedFiles.slice(0, unusedLimit)

              setFiles(files.concat(slicedAddedFiles))
            }
          }}
        />
      </div>
      <p className='instructions'>{instructions}</p>
    </div>
  )
}
