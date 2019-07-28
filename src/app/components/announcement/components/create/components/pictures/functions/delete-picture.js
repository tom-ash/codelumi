export function deletePicture(index) {
  const blobs = [...this.props.blobs]
  blobs.splice(index, 1)
  this.props.changeInputs({ pictureBlobs: blobs })
}