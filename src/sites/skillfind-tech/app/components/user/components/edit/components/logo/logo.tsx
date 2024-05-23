import React, { useState } from 'react'
import { PictureInput } from '../../../../../../../../shared/app/components/support/picture-input/picture-input'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { useDispatch } from 'react-redux'
import { saveBlob } from '../../../../../../../../shared/app/components/support/picture-input/functions/save-blob'
import API_URL from '../../../../../../../shared/constants/urls/api'
import { patch } from '../../../../../../../../shared/app/functions/fetch-api/fetch-api'

export const Logo = () => {
  const { logoUploadInstructions, cancel, save } = useTexts()
  const { logo, persistedLogo } = useInputs()
  const { lang } = useApp()
  const classNames = ['logo']
  const [isEdited, setIsEdited] = useState(false)
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <div className={classNames.join(' ')}>
      <label>Logo</label>
      <PictureInput
        multiple={false}
        limit={1}
        icon='plus'
        instructions={logoUploadInstructions}
        persistedPictures={[persistedLogo]}
        maxWidth={480}
        maxHeight={360}
        onPictureSet={(pictures) => {
          if (pictures && pictures.length) {
            if (!pictures[0].database) {
              setIsEdited(true)
            }

            setInputs({
              logo: pictures[0]
            })
          } else {
            // setIsEdited(true)

            setInputs({
              logo: null,
            })
          }
        }}
      />
      <div className='buttons'>
        {(isEdited  || !logo) && <button
          className='cancel'
          onClick={() => {
            // TODO: Implement better solution.
            location.reload()
          }}
        >
          {cancel}
        </button>}
        {isEdited && <button
          className='save'
          onClick={async () => {
            if (logo) {
              const abc = await saveBlob({
                apiUrl: API_URL,
                blob: logo.blob,
                path: 'temporary',
                key: '',
                randomizeKey: true,
                fileType: 'png',
                mimeType: 'image/png',
              })

              console.log('abc', abc)

              await patch({
                path: `user/update/logo`,
                body: { value: abc.database },
              })

              // TODO: Implement better solution.
              location.reload()
            }
          }}
        >
          {save}
        </button>}
        <FloatClear />
      </div>
    </div>
  )
}
