//@ts-ignore
let ImageCompressor
if (typeof window !== 'undefined') ImageCompressor = require('image-compressor.js').default

const compress = (blob: Blob) => {
  console.log(blob)

  //@ts-ignore
  // document.body.appendChild(canvas)

  //@ts-ignore
  // var canvasBlob = getCanvasBlob(canvas);

  // //@ts-ignore
  // canvasBlob
  // //@ts-ignore
  // .then(blob => console.log(blob))

  //@ts-ignore
  // return canvas.toBlob(blob => {
  //   //@ts-ignore
  //   // const imageCompressor = new ImageCompressor()
  //   // return imageCompressor.compress(
  //   //   blob,
  //   //   {
  //   //     quality: 0.8,
  //   //     convertSize: 100000
  //   //   }
  //   // )
  //   //@ts-ignore
  //   // .then(file => {

  //   //   console.log(file)

  //   //   // //@ts-ignore
  //   //   // function download(content, filename) {
  //   //   //   const a = document.createElement('a')
  //   //   //   //@ts-ignore
  //   //   //   a.setAttribute('href', URL.createObjectURL(content))
  //   //   //   a.setAttribute('download', filename)
  //   //   //   a.click()
  //   //   // }

  //   //   // download(file, 'image.jpeg')
  //   // })
  // })
  // //@ts-ignore
  // .then(blob => {
  //   console.log(blob)
  // })
}

export default compress
