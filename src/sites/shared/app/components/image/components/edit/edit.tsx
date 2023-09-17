import React, { useEffect } from 'react'
import { StorageKeyInput } from './components/storage-key/storage-key.input'
import { StorageUrl } from './components/storage-url/storage-url.input'
import { Dimensions } from './components/dimensions/dimensions'
import { Output } from './components/output/output'
import { BodyTextarea } from './components/body/body.textarea'
import { UpdateButton } from './components/update-button/update-button'
import { StoragePreview } from './components/storage-preview/storage-preview'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../functions/store/use-inputs'
import { useDispatch } from 'react-redux'

const ImageEdit = () => {
  useStyles(styles)

  const { body } = useInputs()
  const dispatch = useDispatch()
  const setData = (value: any) => dispatch({ type: 'data', value })

  useEffect(() => {
    const parsedBody = (() => {
      try {
        return JSON.parse(body)
      } catch {
        return []
      }
    })()

    setData({ body: parsedBody })
  }, [body])

  return (
    <div className='edit'>
      <StorageKeyInput />
      <StorageUrl />
      <Dimensions />
      <Output />
      <BodyTextarea />
      <UpdateButton />
      <StoragePreview />
    </div>
  )
}

export default ImageEdit
