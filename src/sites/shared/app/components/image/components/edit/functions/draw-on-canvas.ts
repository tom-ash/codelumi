import html2canvas from 'html2canvas'

const drawOnCanvas = () => {
  return html2canvas(
    document.getElementById('image-output'),
    {
      allowTaint: true,
      useCORS: true
    }
  )
}

export default drawOnCanvas
