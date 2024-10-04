import { compressBlob } from "../../../../functions/images/compress-blob"
import { drawOnCanvas } from "../../../../functions/images/draw-on-canvas"
import { IMAGE_FILE_TYPE, IMAGE_MIME_TYPE, saveBlob } from "../../../../functions/images/save-blob"
import { transformCanvasToBlob } from "../../../../functions/images/transform-canvas-to-blob"

interface CreateSocialImage {
  (params: {
    apiUrl: string
  }): Promise<string>
}

export const createSocialImage: CreateSocialImage = async (params) => {
  const { apiUrl } = params

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
