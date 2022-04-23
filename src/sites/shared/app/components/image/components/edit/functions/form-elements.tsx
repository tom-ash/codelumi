import React from "react"
import { ManagedTextarea, ManagedButton } from "managed-inputs"
import save from './save'
import drawOnCanvas from './draw-on-canvas'
import transformCanvasToBlob from './transform-canvas-to-blob'
import appendCanvasToBody from './append-canvas-to-body'
import compress from './compress'

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
  body: string,
  width: string,
  height: string,
  storageKey: string,
  storageUrl: string
}

export const SaveButton = (props: SaveButtonProps) => {
  const { apiUrl, imageId, body, width, height, storageKey, storageUrl } = props
  const classNames = { container: 'form-input textarea' }
  const onClick = () => save({ apiUrl, imageId, body, width, height, storageKey, storageUrl })
  const label = 'Save'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}

interface DownloadButtonProps {
  apiUrl: string,
  storageKey: string,
  changeData(props: object): void
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const {
    apiUrl,
    storageKey,
    changeData
  } = props

  const classNames = { container: 'form-input textarea' }
  const onClick = () => {
    drawOnCanvas()
    .then(transformCanvasToBlob)
    .then(compress)
    .then(compressedBlob => {


      const keyExtension = '.jpeg' // TODO: Derive from compressedBlob.type.
      console.log(storageKey + keyExtension)

      const body = JSON.stringify({
        key: storageKey + keyExtension,
        content_type: compressedBlob.type
      })

      console.log(compressedBlob)
      
      fetch(apiUrl + '/storage/s3-presigned-post', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(json => {
        let formData = new FormData()

        Object.keys(json.fields).forEach(key => { formData.append(key, json.fields[key]) })
        formData.append('file', compressedBlob)
        fetch(json.url, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
            'acl': 'public-read'
          }
        })
        .then(response => {
          changeData({
            storageUrl: response.url + storageKey + keyExtension,
            storageUrlRandomizedQuaryParameter: Math.random()
          })
        })
      })
    })
  }
  const label = 'Upload'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}
