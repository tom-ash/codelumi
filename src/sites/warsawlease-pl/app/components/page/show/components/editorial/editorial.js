import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const Editorial = props => {
  useStyles(styles)

  const { nodeContent } = props

  return (
    <p className='editorial'>
      {nodeContent}
    </p>
  )
}

export default Editorial
