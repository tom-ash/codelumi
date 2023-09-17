import React from 'react'
import { ShowPolishDescription } from './components/show-polish-description/show-polish-description.checkbox'
import { PolishDescriptionTextarea } from './components/polish-description/polish-description.textarea'
import { ShowEnglishDescription } from './components/show-english-description/show-english-description.checkbox'
import { EnglishDescriptionTextarea } from './components/english-description/english-description.textarea'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'

export const Description = () => {
  const { showPolishDescription, showEnglishDescription } = useInputs()

  return (
    <div
      id='listing-create-description'
      className='section'
    >
      <ShowPolishDescription />
      {showPolishDescription && <PolishDescriptionTextarea />}
      <ShowEnglishDescription />
      {showEnglishDescription && <EnglishDescriptionTextarea />}
    </div>
  )
}
