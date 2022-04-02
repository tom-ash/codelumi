import React from "react"
import { ManagedTextarea, ManagedButton } from "managed-inputs"
import save from './save'

//@ts-ignore
interface BodyTextareaProps {
  body: string,
  changeData(): void
}

export const BodyTextarea = (props: BodyTextareaProps) => {
  const { body, changeData } = props
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    classNames,
    value: body,
    counterLimit: 10000,
    //@ts-ignore
    onChange: value => changeData({ body: value })
  }

  return <ManagedTextarea {...textareaProps} />
}

interface SaveButtonProps {
  apiUrl: string,
  imageId: number,
  body: string
}

export const SaveButton = (props: SaveButtonProps) => {
  const {
    apiUrl,
    imageId,
    body
  } = props

  const classNames = { container: 'form-input textarea' }
  const onClick = () => save({ apiUrl, imageId, body, withRouteChange: false })
  const label = 'Save'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}
