import { drawOnCanvas } from '../../../../helpers/images/draw-on-canvas';
import { compressBlob } from '../../../../helpers/images/compress-blob';
import { transformCanvasToBlob } from '../../../../helpers/images/transform-canvas-to-blob';
import {
  IMAGE_FILE_TYPE,
  IMAGE_MIME_TYPE,
  saveBlob,
} from '../../../../helpers/images/save-blob';
import { SOCIAL_IMAGE_CANVAS_ID } from '../social-image-canvas';

interface CreateSocialImage {
  (params: { apiUrl: string }): Promise<string>;
}

export const createSocialImage: CreateSocialImage = async (params) => {
  const { apiUrl } = params;

  const canvas = await drawOnCanvas(SOCIAL_IMAGE_CANVAS_ID);
  // Resizing canvas: https://stackoverflow.com/questions/3543358/resizing-a-html-canvas-blanks-its-contents.
  const blob = await transformCanvasToBlob(canvas);
  const compressedBlob = await compressBlob(blob);

  return saveBlob({
    apiUrl,
    blob: compressedBlob,
    key: 'image',
    fileType: IMAGE_FILE_TYPE.PNG,
    mimeType: IMAGE_MIME_TYPE.PNG,
  });
};
