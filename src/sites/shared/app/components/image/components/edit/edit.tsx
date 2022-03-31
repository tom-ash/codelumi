import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import Body from './functions/inputs'

type ImageEditProps = {
//   node: {
//     image: string
//     logo: string
//     t: string
//     title: string
//   }
}

const ImageEdit = (props: ImageEditProps) => {
  useStyles(styles)

  const bodyElements = [

    {
      t: 'img',
      attrs: {
        src: 'https://soundofit.s3.eu-central-1.amazonaws.com/assets/backgrounds/gradient-yellow-brown-lines.jpg',
        style: {
          width: 1200,
          height: 630
        }
      }
    },
    {
      t: 'img',
      attrs: {
        src: 'https://soundofit.s3.eu-central-1.amazonaws.com/assets/logos/javascript.png',
        style: {
          width: 200,
          zIndex: 2,
          position: 'absolute',
          top: 150,
          right: 0,
          left: 0,
          margin: '0 auto',
        }
      }
    },
    {
      t: 'div',
      attrs: {
        style: {
          zIndex: 2,
          color: 'white',
          position: 'absolute',
          right: 0,
          bottom: 100,
          left: 0,
          margin: '0 auto',
          textAlign: 'center',
          fontSize: 50,
          fontFamily: 'Titillium Web'
        }
      },
      c: 'JavaScript Tutorial'
    }
  ]


  return (
    <div className='edit'>
      <div id='image-output' className='output'>
        {bodyElements.map(bodyElement => {


          return (
          React.createElement(
            bodyElement.t,
            //@ts-ignore
            bodyElement.attrs || {},
            //@ts-ignore
            bodyElement.c
          )
          )



        })}

      </div>

      <div className='input'>
        <Body />
      </div>
    </div>
  )

//   const { node: { image, logo, title } } = props

//   return (
//     <div className='image-editor'>
//       <div className='image-container'>
//         <img
//           src={image}
//           className='image'
//         />
//         <img
//           src={logo}
//           className='logo'
//         />
//         <h1>
//           {title}
//         </h1>
//       </div>
//     </div>
//   )  
// }
}

export default ImageEdit
