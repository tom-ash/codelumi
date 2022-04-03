import React from "react"
import { ManagedTextarea, ManagedButton } from "managed-inputs"
import save from './save'
import html2canvas from 'html2canvas'
import Compressor from 'compressorjs';

import ImageCompressor from 'image-compressor.js'

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
    //@ts-ignore
    ).then(canvas => {
      document.body.appendChild(canvas)

      canvas.toBlob(blob => {
        const imageCompressor = new ImageCompressor();
        imageCompressor
        .compress(
          blob,
          {
            quality: 0.8,
            convertSize: 100000
          }
        )
        .then(file => {
          //@ts-ignore
          function download(content, filename){
            const a = document.createElement('a')
            //@ts-ignore
            a.setAttribute('href', URL.createObjectURL(content))
            a.setAttribute('download', filename)
            a.click()
          }

          download(file, 'image.jpeg')
        })
      })
    })
  }

  const label = 'Download'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}