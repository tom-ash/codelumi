import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'

type ImageCreateProps = {
  // TODO
}

const ImageCreate = (props: ImageCreateProps) => {
  useStyles(styles)

  const {} = props

  return (
    <>
      IMAGE CREATE
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCreate)
