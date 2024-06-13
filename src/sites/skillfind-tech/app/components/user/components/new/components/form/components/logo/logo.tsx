import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PictureInput } from '../../../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { useErrors } from '../../../../../../../../../../shared/app/functions/store/use-errors'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg'

export const Logo = () => {
  useStyles(styles)

  const { logoUploadInstructions } = useTexts()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { logo: logoError } = useErrors()

  const classNames = ['logo']
  if (logoError) {
    classNames.push('error')
  }

  return (
    <div
      id='logo-input'
      className={classNames.join(' ')}
    >
      <label>
        Logo
        <SVG
          name='dot'
          className='required'
        />
      </label>
      <PictureInput
        multiple={false}
        limit={1}
        icon='plus'
        instructions={logoUploadInstructions}
        maxWidth={480}
        maxHeight={360}
        onPictureSet={pictures => {
          setInputs({ logo: pictures[0] })
          setErrors({ logo: false })
        }}
      />
      {logoError && <div className='error'>{logoError}</div>}
    </div>
  )
}
