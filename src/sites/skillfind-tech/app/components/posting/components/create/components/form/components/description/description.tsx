import React from 'react'
import { LocalizedDescription } from './components/localized-description'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'

export const Description = () => {
  const { descriptionHeading: heading } = useTexts()

  return (
    <section className='description'>
      <h2>{heading}</h2>
      <LocalizedDescription lang={'en'} />
      <LocalizedDescription lang={'pl'} />
    </section>
  )
}
