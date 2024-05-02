//@ts-ignore
let ImageCompressor: any
if (typeof window !== 'undefined') {
  ImageCompressor = require('image-compressor.js').default
}

interface CompressBlob {
  (blob: Blob): Promise<Blob>
}

export const compressBlob: CompressBlob = async (blob: Blob) => {
  const imageCompressor = new ImageCompressor()

  return imageCompressor.compress(blob, {
    quality: 0.8,
    convertSize: 100000,
  })
}
