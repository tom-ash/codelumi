import { compressAndSaveBlobPicture } from '../../../../../../../functions/picture-handlers'

export function savePicture() {
  this.props.changeControl({ connecting: true })
  const blobs = [ ...this.props.blobs ]
  const blob = blobs.shift()
  const uploads = [ ...this.props.uploads ]
  if (blob.database === '') {
    const destination = this.props.editing ? `/pictures/create/announcement/${this.props.id}` : '/pictures/create/temporary'
    compressAndSaveBlobPicture(destination, blob.blob, (key) => {
      delete blob.blob
      blob.database = key
      uploads.push(blob)
      this.props.changeControl({ connecting: false })
      this.props.changeInputs({ pictureBlobs: blobs, pictureUploads: uploads })
    })
  } else {
    delete blob.blob
    uploads.push(blob)
    this.props.changeControl({ connecting: false })
    this.props.changeInputs({ pictureBlobs: blobs, pictureUploads: uploads })
  }
}
