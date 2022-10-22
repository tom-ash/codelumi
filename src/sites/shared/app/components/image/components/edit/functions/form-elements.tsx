import React from 'react'
import { ManagedTextarea, ManagedButton } from 'managed-inputs'
import save from './save'
import drawOnCanvas from './draw-on-canvas'
import transformCanvasToBlob from './transform-canvas-to-blob'
import compress from './compress'

interface BodyTextareaProps {
  body: string
  changeData(props: object): void
}

export const BodyTextarea = (props: BodyTextareaProps) => {
  const { body, changeData } = props
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    classNames,
    value: body,
    counterLimit: 10000,
    onChange: (body: object) => changeData({ body }),
  }

  return <ManagedTextarea {...textareaProps} />
}

interface SaveButtonProps {
  apiUrl: string
  imageId: number
  body: string
  width: string
  height: string
  storageKey: string
  storageUrl: string
  changeData(props: object): void
}

export const SaveButton = (props: SaveButtonProps) => {
  const { apiUrl, imageId, body, width, height, storageKey, storageUrl, changeData } = props
  const classNames = { container: 'form-input textarea' }
  const onClick = () => save({ apiUrl, imageId, body, width, height, storageKey, storageUrl, changeData })
  const label = 'Save'

  const buttonProps = {
    classNames,
    onClick,
    label,
  }

  return <ManagedButton {...buttonProps} />
}
