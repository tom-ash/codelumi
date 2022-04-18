//@ts-ignore
let ImageCompressor
if (typeof window !== 'undefined') ImageCompressor = require('image-compressor.js').default

const compressAndDownload = (canvas: object) => {
  //@ts-ignore
  document.body.appendChild(canvas)

  //@ts-ignore
  canvas.toBlob(blob => {
    //@ts-ignore
    const imageCompressor = new ImageCompressor()
    imageCompressor
    .compress(
      blob,
      {
        quality: 0.8,
        convertSize: 100000
      }
    )
    //@ts-ignore
    .then(file => {
      //@ts-ignore
      function download(content, filename) {
        const a = document.createElement('a')
        //@ts-ignore
        a.setAttribute('href', URL.createObjectURL(content))
        a.setAttribute('download', filename)
        a.click()
      }

      download(file, 'image.jpeg')
    })
  })
}

export default compressAndDownload
