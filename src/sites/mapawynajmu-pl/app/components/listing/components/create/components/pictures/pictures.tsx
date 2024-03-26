import React, { useEffect } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PictureInput } from '../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { setBlobs } from './functions/set-blobs'
import { useDispatch } from 'react-redux'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'

export const Pictures = () => {
  useStyles(styles)

  const { picturesUploadInstructions } = useTexts()
  const { id: listingId } = useData()
  const { currentPictures } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  useEffect(() => {
    if (listingId) {
      setBlobs({
        listingId,
        currentPictures,
        setInputs,
      })
    }
  }, [listingId])

  return (
    <div className='pictures'>
      <PictureInput
        multiple={true}
        limit={12}
        targetWidth={1200}
        targetHeight={768}
        icon='camera'
        instructions={picturesUploadInstructions}
      />
    </div>
  )
}
