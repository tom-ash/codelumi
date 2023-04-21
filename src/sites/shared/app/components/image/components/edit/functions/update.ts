import drawOnCanvas from './draw-on-canvas'
import transformCanvasToBlob from './transform-canvas-to-blob'
import compress from './compress'

interface saveProps {
  apiUrl: string
  imageId: number
  body: string
  width: string
  height: string
  storageKey: string
  storageUrl: string
  setControl(props: object): void
  setData(props: object): void
}

export const update = (props: saveProps) => {
  const { apiUrl, imageId, body: imageBody, width, height, storageKey, setControl, setData } = props

  // @ts-ignore
  drawOnCanvas()
    .then(transformCanvasToBlob)
    // @ts-ignore
    .then(compress)
    .then(compressedBlob => {
      const keyExtension = '.jpeg' // TODO: Derive from compressedBlob.type.

      const body = JSON.stringify({
        key: storageKey + keyExtension,
        content_type: compressedBlob.type,
      })

      fetch(apiUrl + '/storage/s3-presigned-post', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(json => {
          let formData = new FormData()

          Object.keys(json.fields).forEach(key => {
            formData.append(key, json.fields[key])
          })
          formData.append('file', compressedBlob)
          fetch(json.url, {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              acl: 'public-read',
            },
          }).then(response => {
            const storageUrl = response.url + storageKey + keyExtension

            setData({
              storageUrl: response.url + storageKey + keyExtension,
            })

            fetch(`${apiUrl}/image/update`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                imageId,
                body: imageBody,
                width,
                height,
                storageKey,
                storageUrl,
              }),
            }).then(() => {
              setControl({ connecting: false })
            })
          })
        })
    })
}
