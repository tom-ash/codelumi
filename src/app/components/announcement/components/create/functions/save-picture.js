import { compressAndSaveBlobPicture } from '../../../../../functions/picture-handlers'

export function savePicture() {
  const {
    id,
    editing,
    changeControl,
    changeInputs
  } = this.props

  changeControl({ connecting: true })
  const blobs = [ ...this.props.blobs ]
  const blob = blobs.shift()
  const uploads = [ ...this.props.uploads ]
  if (blob.database === '') {
    const destination = editing ? `/pictures/create/announcement/${id}` : '/pictures/create/temporary'
    compressAndSaveBlobPicture(destination, blob.blob, (key) => {
      delete blob.blob
      blob.database = key
      uploads.push(blob)
      changeControl({ connecting: false })
      changeInputs({ pictureBlobs: blobs, pictureUploads: uploads })
    })
  } else {
    delete blob.blob
    uploads.push(blob)
    changeControl({ connecting: false })
    changeInputs({ pictureBlobs: blobs, pictureUploads: uploads })
  }
}
