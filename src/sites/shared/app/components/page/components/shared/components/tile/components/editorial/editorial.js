import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const Editorial = props => {
  useStyles(styles)

  const { editorial } = props

  return (
    <p className='editorial'>
      <strong>{editorial}</strong>
    </p>
  )
}

export default Editorial
