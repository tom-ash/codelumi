const transformCanvasToBlob = (canvas: HTMLCanvasElement) => {
  return new Promise(function (resolve, reject) {
    // @ts-ignore
    canvas.toBlob((blob: Blob) => {
      resolve(blob);
    });
  });
};

export default transformCanvasToBlob;
