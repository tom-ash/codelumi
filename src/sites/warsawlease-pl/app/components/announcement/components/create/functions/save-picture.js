import { compressAndSaveBlobPicture } from '../../../../../functions/picture-handlers'

function savePicture() {
  const {
    renderEdit,
    announcement,
    changeData,
    changeInputs,
    changeControl
  } = this.props

  changeControl({ connecting: true })
  const blobs = [ ...this.props.blobs ]
  const blob = blobs.shift()
  const picUploads = [ ...this.props.picUploads ]
  if (blob.database === '') {
    const destination = renderEdit ? `/pictures/create/announcement/${window.location.pathname.match(/(edytuj-ogloszenie|edit-announcement)\/(\d+)/)[2]}` : '/pictures/create/temporary'
    compressAndSaveBlobPicture(destination, blob.blob, (key) => {
      delete blob.blob
      blob.database = key
      picUploads.push(blob)
      const announcementWithPictures = {...announcement, pictures: picUploads.map(picUpload => ({
        database: picUpload.database,
        description: picUpload.description
      }))}
      changeData({ announcement: announcementWithPictures })
      changeInputs({ blobs: blobs, picUploads: picUploads })
      changeControl({ connecting: false })
    })
  } else {
    delete blob.blob
    picUploads.push(blob)
    const announcementWithPictures = {...announcement, pictures: picUploads.map(picUpload => ({
      database: picUpload.database,
      description: picUpload.description
    }))}
    changeData({ announcement: announcementWithPictures })
    changeInputs({ blobs: blobs, picUploads: picUploads })
    changeControl({ connecting: false })
  }
}

export default savePicture
