const oc = document.createElement('canvas')
const octx = oc.getContext('2d')

export function addPicture(files) {
  this.props.changeControl({ addingPicture: true })
  createBlob(window.URL.createObjectURL(files.pop()), (blob) => {
    this.props.changeInputs({
      pictureFiles: files,  
      pictureBlobs: [...this.props.blobs].concat([{
        blob: window.URL.createObjectURL(blob), database: '', description: ''
      }])
    })
    this.props.changeControl({ addingPicture: false })
    this.props.changeErrors({ pictures: { pl: '', en: '' } })
  })
}

function createBlob(picture, callback) {
  let img = document.createElement('img');
  img.src = picture
  img.onload = () => {
    let sourceWidth = img.width
    let sourceHeight = img.height
    let targetWidth = 0
    let widthIndent = 0
    let targetHeight = 0
    let heightIndent = 0
    if (sourceHeight / sourceWidth > 0.75) {
      targetHeight = Math.round(sourceWidth * 0.75)
      heightIndent = Math.round((sourceHeight - targetHeight) / 2)
      targetWidth = img.width
      widthIndent = 0
    } else {
      targetWidth = Math.round(sourceHeight / 0.75)
      widthIndent = Math.round((sourceWidth - targetWidth) / 2)
      targetHeight = img.height
      heightIndent = 0
    }
    oc.width = 1024
    oc.height = 768
    octx.drawImage(img, widthIndent, heightIndent, sourceWidth - (2 * widthIndent), sourceHeight - (2 *heightIndent), 0, 0, 1024, 768);
    oc.toBlob((blob) => {
      callback(blob)
    })
  }
}