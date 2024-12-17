interface TransformCanvasToBlob {
  (canvas: HTMLCanvasElement): Promise<Blob>;
}

export const transformCanvasToBlob: TransformCanvasToBlob = async (canvas) => {
  return new Promise(function (resolve) {
    canvas.toBlob((blob: Blob | null) => {
      if (!blob) {
        throw new Error('Canvas to blob transform error!');
      }

      resolve(blob);
    });
  });
};
