import { Picture } from '../../../types/picture.interface';

interface CreatePictures {
  (params: {
    files: File[];
    currentPictures: Picture[];
    targetWidth?: number;
    targetHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
  }): Promise<Picture[]>;
}

export const createPictures: CreatePictures = async (params) => {
  const {
    files,
    targetWidth,
    targetHeight,
    currentPictures,
    maxWidth,
    maxHeight,
  } = params;
  let pictures: Picture[] = [...currentPictures];

  await Promise.all(
    files.map(async (pictureFile) => {
      const fileSrc = window.URL.createObjectURL(pictureFile);

      const blob: Blob | void | null = await createBlob({
        fileSrc,
        targetWidth,
        targetHeight,
        maxWidth,
        maxHeight,
      });

      if (blob) {
        pictures.push({
          blob,
          objectUrl: URL.createObjectURL(blob),
          rotatedBy: 0,
          file: pictureFile,
        });
      }
    }),
  );

  return pictures;
};

export const loadImage = async (fileSrc: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = fileSrc;
  });
};

interface CreateBlobInterface {
  (params: {
    fileSrc: string;
    targetWidth?: number;
    targetHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
  }): Promise<Blob | void | null>;
}

export const createBlob: CreateBlobInterface = async (params) => {
  const { fileSrc, targetWidth, targetHeight, maxWidth, maxHeight } = params;

  const oc = document.createElement('canvas');
  const octx = oc.getContext('2d');
  const img: HTMLImageElement = await loadImage(fileSrc);
  const sourceWidth = img.width;
  const sourceHeight = img.height;

  let widthIndent = 0;
  let heightIndent = 0;

  let width = sourceWidth;
  let height = sourceHeight;

  if (maxWidth && maxHeight) {
    const requestedRatio = maxWidth / maxHeight;
    const pictureRatio = sourceWidth / sourceHeight;

    if (requestedRatio > pictureRatio) {
      height = maxHeight;
      width = sourceWidth / (sourceHeight / maxHeight);
    } else {
      width = maxWidth;
      height = sourceHeight / (sourceWidth / maxWidth);
    }
  }

  if (targetWidth && targetHeight) {
    const ratio = targetHeight / targetWidth;

    if (sourceHeight / sourceWidth > ratio) {
      const ratiodHeight = Math.round(sourceWidth * ratio);
      heightIndent = Math.round((sourceHeight - ratiodHeight) / 2);
      widthIndent = 0;
    } else {
      const ratiodWitdh = Math.round(sourceHeight / ratio);
      widthIndent = Math.round((sourceWidth - ratiodWitdh) / 2);
      heightIndent = 0;
    }

    width = targetWidth;
    height = targetHeight;
  }

  oc.width = width;
  oc.height = height;

  if (octx) {
    octx.drawImage(
      img,
      widthIndent,
      heightIndent,
      sourceWidth - 2 * widthIndent,
      sourceHeight - 2 * heightIndent,
      0,
      0,
      width,
      height,
    );

    return new Promise(function (resolve, reject) {
      oc.toBlob((blob) => {
        return resolve(blob);
      });
    });
  }
};
