import html2canvas from 'html2canvas'

interface DrawOnCanvas {
  (elementId: string): Promise<HTMLCanvasElement>
}

export const drawOnCanvas: DrawOnCanvas = (elementId: string) => {
  const imageOutput = document.getElementById(elementId)

  if (!imageOutput) {
    throw new Error('Invalid HTML element selected for canvas imaging.')
  }

  return html2canvas(imageOutput, {
    allowTaint: true,
    useCORS: true,
  })
}
