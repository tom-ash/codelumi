import React, { useEffect, useState } from 'react'
import { DragAndDrop } from './components/drag-and-drop/drag-and-drop'

interface FileInputInterface {
  (props: {
    label?: string
    limit: number
    icon: string
    instructions: string
    onFilesSet(files: File[]): void
  }): React.ReactElement
}

export const FileInput: FileInputInterface = props => {
  const { label, limit, icon, instructions, onFilesSet } = props

  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    onFilesSet(files)
  }, [files])

  return (
    <div className='file-input'>
      {label && <label>{label}</label>}
      <DragAndDrop
        files={files}
        limit={limit}
        icon={icon}
        instructions={instructions}
        setFiles={setFiles}
      />
      <ul>
        {files.map(file => {
          return <li>{file.name}</li>
        })}
      </ul>
    </div>
  )
}
