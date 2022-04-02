import React from "react"
import { ManagedTextarea, ManagedButton } from "managed-inputs"
import save from './save'
import html2canvas from 'html2canvas'
import Compressor from 'compressorjs';

//@ts-ignore
interface BodyTextareaProps {
  body: string,
  changeData(): void
}

export const BodyTextarea = (props: BodyTextareaProps) => {
  const { body, changeData } = props
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    classNames,
    value: body,
    counterLimit: 10000,
    //@ts-ignore
    onChange: value => changeData({ body: value })
  }

  return <ManagedTextarea {...textareaProps} />
}

interface SaveButtonProps {
  apiUrl: string,
  imageId: number,
  body: string
}

export const SaveButton = (props: SaveButtonProps) => {
  const {
    apiUrl,
    imageId,
    body
  } = props

  const classNames = { container: 'form-input textarea' }
  const onClick = () => save({ apiUrl, imageId, body, withRouteChange: false })
  const label = 'Save'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}

interface DownloadButtonProps {
  // apiUrl: string,
  // imageId: number,
  // body: string
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const {
    // apiUrl,
    // imageId,
    // body
  } = props

  const classNames = { container: 'form-input textarea' }
  const onClick = () => {

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy
    // https://html2canvas.hertzen.com/configuration
    // https://aws.amazon.com/premiumsupport/knowledge-center/s3-configure-cors/
    // curl -i https://soundofit.s3.eu-central-1.amazonaws.com/assets/backgrounds/gradient-yellow-brown-lines.jpg -H "Origin: http://local.soundof.it:8080"

    html2canvas(
      document.getElementById('image-output'),
      {
        allowTaint: true,
        logging: true,
        useCORS: true
      }
    ).then(function(canvas) {
      document.body.appendChild(canvas)

      canvas.toBlob(function(blob) {
        new Compressor(blob), {
          quality: 0.6,
      
          // The compression process is asynchronous,
          // which means you have to access the `result` in the `success` hook function.

          //@ts-ignore
          success(result) {

            console.log(result)

            // const formData = new FormData();
      
            // // The third parameter is required for server
            // formData.append('file', result, result.name);
      
            // // Send the compressed image file to server with XMLHttpRequest.
            // axios.post('/path/to/upload', formData).then(() => {
            //   console.log('Upload success');
            // });
          },
          // error(err) {
          //   console.log(err.message);
          // },
        }
      })
    })

    // //@ts-ignore
    // html2canvas(document.querySelector('image-output'), {
    //   //@ts-ignore
    //   letterRendering: 1,
    //   allowTaint : true,
    //   useCORS: true
    // })
    // //@ts-ignore
    // .then(canvas => {
    //   //@ts-ignore
    //   canvas.toBlob(function(blob) {
    //     const imageCompressor = new ImageCompressor()

    //     //@ts-ignore
    //     imageCompressor.run(
    //       canvas.toDataURL('image/jpeg', 1),
    //       {
    //         toWidth : 2400,
    //         toHeight : 1260,
    //         speed : 'low',
    //         mimeType : 'image/webp'
    //       },
    //       //@ts-ignore
    //       compressedBlob => {
    //         console.log(compressedBlob)
    //         var saveData = (function () {
    //           var a = document.createElement("a")
    //           document.body.appendChild(a)
    //           //@ts-ignore
    //           a.style = "display: none"
    //           //@ts-ignore
    //           return function (fileName) {
    //             const url = compressedBlob
    //             a.href = url
    //             a.download = fileName
    //             a.click()
    //             window.URL.revokeObjectURL(url)
    //           }
    //         }())
            
    //         const fileName = "my-download.jpeg"
            
    //         saveData(fileName)
    //       }
    //     )
    //   })
    // })
  }
  const label = 'Download'

  const buttonProps = {
    classNames,
    onClick,
    label
  }

  return <ManagedButton {...buttonProps} />
}