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
  const picUploads = [ ...this.props.picUploads ]
  if (blob.database === '') {
    const destination = editing ? `/pictures/create/announcement/${id}` : '/pictures/create/temporary'
    compressAndSaveBlobPicture(destination, blob.blob, (key) => {
      delete blob.blob
      blob.database = key
      picUploads.push(blob)
      changeControl({ connecting: false })
      changeInputs({ blobs: blobs, picUploads: picUploads })
    })
  } else {
    delete blob.blob
    picUploads.push(blob)
    changeControl({ connecting: false })
    changeInputs({ blobs: blobs, picUploads: picUploads })
  }
}
