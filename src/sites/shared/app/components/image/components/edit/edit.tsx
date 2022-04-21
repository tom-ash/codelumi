import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { BodyTextarea, SaveButton, DownloadButton } from './functions/form-elements'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Dimensions from './components/dimensions/dimensions'
import OutputProps from './components/output/output'

type ImageEditProps = {
  apiUrl: string,
  imageId: number,
  body: string,
  changeData(): void,
  width: string,
  height: string
}

const ImageEdit = (props: ImageEditProps) => {
  useStyles(styles)

  const { apiUrl, imageId, body, changeData, width, height } = props

  const bodyElements = (() => {
    try {
      return JSON.parse(body)
    } catch {
      return []
    }
  })()

  const bodyTextareaProps = { body, changeData }
  const saveButtonProps = { imageId, body, apiUrl, width, height }
  const dimensionsProps = { width, height, changeData }
  const outputProps = { width, height, bodyElements }

  return (
    <div className='edit'>
      <Dimensions {...dimensionsProps} />
      <OutputProps {...outputProps} />      
      <BodyTextarea {...bodyTextareaProps} />
      <SaveButton {...saveButtonProps} />
      <DownloadButton />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageEdit)
