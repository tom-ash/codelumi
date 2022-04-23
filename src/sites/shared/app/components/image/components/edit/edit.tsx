import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { BodyTextarea, SaveButton } from './functions/form-elements'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Dimensions from './components/dimensions/dimensions'
import OutputProps from './components/output/output'
import StorageKeyInput from './components/storage-key-input'
import { StoragePreview } from './components/storage-preview'
import StorageUrl from './components/storage-url'

type ImageEditProps = {
  apiUrl: string,
  imageId: number,
  body: string,
  changeData(): void,
  width: string,
  height: string,
  storageKey: string,
  storageUrl: string,
  storageUrlRandomizedQuaryParameter: string
}

const ImageEdit = (props: ImageEditProps) => {
  useStyles(styles)

  const { apiUrl, imageId, body, changeData, width, height, storageKey, storageUrl, storageUrlRandomizedQuaryParameter } = props

  const bodyElements = (() => {
    try {
      return JSON.parse(body)
    } catch {
      return []
    }
  })()

  const bodyTextareaProps = { body, changeData }
  const saveButtonProps = { imageId, body, apiUrl, width, height, storageKey, storageUrl, changeData }
  const dimensionsProps = { width, height, changeData }
  const outputProps = { width, height, bodyElements }
  const storageKeyProps = { storageKey, changeData }
  const storagePreviewProps = { storageUrl, storageUrlRandomizedQuaryParameter }
  const storageUrlAnchorProps = { storageUrl }

  return (
    <div className='edit'>
      <StorageKeyInput {...storageKeyProps} />
      <StorageUrl {...storageUrlAnchorProps} />
      <Dimensions {...dimensionsProps} />
      <OutputProps {...outputProps} />      
      <BodyTextarea {...bodyTextareaProps} />
      <SaveButton {...saveButtonProps} />
      <StoragePreview {...storagePreviewProps} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageEdit)
