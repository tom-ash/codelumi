//@ts-ignore
let ImageCompressor;
if (typeof window !== 'undefined')
  ImageCompressor = require('image-compressor.js').default;

const compress = (blob: Blob) => {
  // @ts-ignore
  const imageCompressor = new ImageCompressor();
  return imageCompressor.compress(blob, {
    quality: 0.8,
    convertSize: 100000,
  });
};

export default compress;
