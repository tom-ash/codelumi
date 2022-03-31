import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

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

  return (
    <div>
      IMAGE EDIT
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
