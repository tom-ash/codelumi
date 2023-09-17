import React from 'react'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'
import { ShowPolishDescription } from './components/show-polish-description/show-polish-description.checkbox'
import { PolishDescriptionTextarea } from './components/polish-description/polish-description.textarea'
import { ShowEnglishDescription } from './components/show-english-description/show-english-description.checkbox'
import { EnglishDescriptionTextarea } from './components/english-description/english-description.textarea'

export const Description = () => {
  const { state } = useStore()
  const { inputs } = state
  const { showPolishDescription, showEnglishDescription } = inputs

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
