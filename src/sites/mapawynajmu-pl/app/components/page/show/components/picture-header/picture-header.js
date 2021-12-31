import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const PictureHeader = props => {
  useStyles(styles)

  const { node } = props
  const { pictureUrl, headerText } = node

  return (
    <div className='picture-header'>
      <img src={pictureUrl} loading='lazy' />
      <h1>
        {headerText}
      </h1>
    </div>
  )
}

export default PictureHeader
