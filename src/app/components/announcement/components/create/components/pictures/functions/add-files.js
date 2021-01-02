export function addFiles(e) {
  let files = Array.from(e.target.files)
  let filesToUploadAmount = 12 - this.props.blobs.length
  if (filesToUploadAmount < 0) {
    filesToUploadAmount = 0
  }
  this.props.changeInputs({ picFiles: files.slice(0, filesToUploadAmount) })
}