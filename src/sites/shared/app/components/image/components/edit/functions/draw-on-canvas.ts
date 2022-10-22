import html2canvas from 'html2canvas'

const drawOnCanvas = () => {
  const imageOutput = document.getElementById('image-output')
  if (!imageOutput) return null

  return html2canvas(imageOutput, {
    allowTaint: true,
    useCORS: true,
  })
}

export default drawOnCanvas
