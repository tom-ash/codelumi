let oc
let octx

if (typeof document !== 'undefined') oc = document.createElement('canvas')
if (typeof document !== 'undefined') octx = oc.getContext('2d')

export function rotatePicture(index) {
  const {
    blobs
  } = this.props

  createBlob(window.URL.createObjectURL(blobs[index].file), blob => {
    if (typeof window === 'undefined') return

    const newBlobs = [...blobs]
    newBlobs[index] = {
      blob: window.URL.createObjectURL(blob),
      database: '',
      description: '',
      file: blobs[index].file
    }
    
    this.props.changeInputs({
      pictureBlobs: newBlobs
    })
  })


}

function createBlob(picture, callback) {
  const img = document.createElement('img');
  img.src = picture
  const ratio = .64

  img.onload = () => {

    oc.width = img.height
    oc.height = img.width

    octx.save()

    octx.translate(
      img.height,
      0
    )

    octx.rotate(90*Math.PI/180)

    octx.drawImage(
      img,
      0,
      0
    )

    octx.restore()

    oc.toBlob((blob) => callback(blob))
  }
}
