import { createBlob, loadImage } from "../../drag-and-drop/functions/create-blobs";
import { Picture } from "../../types/picture.interface"

interface RotatePicture {
  (params: {
    pictures: Picture[];
    index: number;
    setInputs(params: { pictures: Picture[] }): void
  }): void;
}

export const rotatePicture: RotatePicture = async (params) => {
  const { pictures, index, setInputs } = params
  const picture = pictures[index]
  const file = picture.file
  const oc = document.createElement('canvas')
  const octx = oc.getContext('2d')

  if (!file) {
    return
  }

  const img: HTMLImageElement = await loadImage(window.URL.createObjectURL(file))

  if (octx) {
    const { rotatedBy } = picture
    let newRotatedBy: 0 | 90 | 180 | 270 = 0

    switch (rotatedBy) {
      case 0:
        oc.width = img.height
        oc.height = img.width
        octx.translate(img.height, 0)
        octx.rotate((90 * Math.PI) / 180)
        newRotatedBy = 90;
        break;
      case 90:
        oc.width = img.width
        oc.height = img.height
        octx.translate(img.width, img.height)
        octx.rotate((180 * Math.PI) / 180)
        newRotatedBy = 180;
        break;
      case 180:
        oc.width = img.height
        oc.height = img.width
        octx.translate(0, img.width)
        octx.rotate((270 * Math.PI) / 180)
        newRotatedBy = 270;
        break;
      case 270:
        oc.width = img.width
        oc.height = img.height
        break;
    }

    octx.drawImage(img, 0, 0)
    oc.toBlob(async (newBlob) => {
      if (newBlob) {
        const evenNewerBlob = await createBlob({
          fileSrc: window.URL.createObjectURL(newBlob),
          targetWidth: 1200,
          targetHeight: 768,
        })

        if (evenNewerBlob) {
          const newPicture: Picture = {
            ...picture,
            blob: evenNewerBlob,
            objectUrl: URL.createObjectURL(evenNewerBlob),
            rotatedBy: newRotatedBy,
          }

          const newPictures = [...pictures]
          newPictures[index] = newPicture

          setInputs({ pictures: newPictures})
        }
      }
    })
  }
}
