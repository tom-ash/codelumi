import { compressBlob } from '../../../../../../../../../../../shared/app/functions/images/compress-blob'
import { drawOnCanvas } from '../../../../../../../../../../../shared/app/functions/images/draw-on-canvas'
import {
  IMAGE_FILE_TYPE,
  IMAGE_MIME_TYPE,
  saveBlob,
} from '../../../../../../../../../../../shared/app/functions/images/save-blob'
import { transformCanvasToBlob } from '../../../../../../../../../../../shared/app/functions/images/transform-canvas-to-blob'
import apiUrl from '../../../../../../../../../../shared/constants/urls/api'

interface CreateSocialImage {
  (): Promise<string>
}

export const createSocialImage: CreateSocialImage = async () => {
  const canvas = await drawOnCanvas('social-image-canvas')
  // Resizing canvas: https://stackoverflow.com/questions/3543358/resizing-a-html-canvas-blanks-its-contents.
  const blob = await transformCanvasToBlob(canvas)
  const compressedBlob = await compressBlob(blob)

  return saveBlob({
    apiUrl,
    blob: compressedBlob,
    key: 'image',
    fileType: IMAGE_FILE_TYPE.PNG,
    mimeType: IMAGE_MIME_TYPE.PNG,
  })
}
