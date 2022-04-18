import React from "react"
import { ManagedTextarea, ManagedButton } from "managed-inputs"
import save from './save'
import html2canvas from 'html2canvas'
import compressAndDownload from './compress-and-download'

interface BodyTextareaProps {
  body: string,
  changeData(props: object): void
}

export const BodyTextarea = (props: BodyTextareaProps) => {
  const { body, changeData } = props
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    classNames,
    value: body,
    counterLimit: 10000,
    onChange: (body: object) => changeData({ body })
  }

  return <ManagedTextarea {...textareaProps} />
}

interface SaveButtonProps {
  apiUrl: string,
  imageId: number,
  body: string
}

export const SaveButton = (props: SaveButtonProps) => {
  const { apiUrl, imageId, body } = props

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

interface DownloadButtonProps {
  // TODO
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const {
    // TODO
  } = props

  const classNames = { container: 'form-input textarea' }
  const onClick = () => {
    html2canvas(
      document.getElementById('image-output'),
      {
        allowTaint: true,
        useCORS: true
      }
    ).then(canvas => compressAndDownload(canvas))
  }

  const label = 'Download'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}