import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PictureInput } from '../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'

export const Logo = () => {
  useStyles(styles)

  const { logoUploadInstructions } = useTexts()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <div className='logo'>
      <PictureInput
        multiple={false}
        limit={1}
        icon='camera'
        instructions={logoUploadInstructions}
        onPictureSet={(pictures) => setInputs({ logo: pictures[0] })}
      />
    </div>
  )
}
