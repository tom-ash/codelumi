import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { BodyTextarea, SaveButton } from './functions/form-elements'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Dimensions from './components/dimensions/dimensions'
import OutputProps from './components/output/output'
import StorageKeyInput from './components/storage-key-input'
import { StoragePreview } from './components/storage-preview'
import StorageUrl from './components/storage-url'
import { changeUrl } from '../../../../functions/routes/changers/route-generic'

type ImageEditProps = {
  apiUrl: string
  imageId: number
  body: string
  setData(): void
  width: string
  height: string
  storageKey: string
  storageUrl: string
  storageUrlRandomizedQuaryParameter: string
  clientUrl: string
  appName: string
  device: string
  lang: string
  langHandler: LangHandler
}

const ImageEdit = (props: ImageEditProps) => {
  useStyles(styles)

  const {
    apiUrl,
    imageId,
    body,
    setData,
    width,
    height,
    storageKey,
    storageUrl,
    storageUrlRandomizedQuaryParameter,
    clientUrl,
    appName,
    device,
    lang,
    langHandler,
  } = props

  const bodyElements = (() => {
    try {
      return JSON.parse(body)
    } catch {
      return []
    }
  })()

  const bodyTextareaProps = { body, setData }
  const saveButtonProps = { imageId, body, apiUrl, width, height, storageKey, storageUrl, setData }
  const dimensionsProps = { width, height, setData }
  const outputProps = {
    width,
    height,
    bodyElements,
    clientUrl,
    appName,
    device,
    lang,
    changeUrl,
    langHandler,
  }
  const storageKeyProps = { storageKey, setData }
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
