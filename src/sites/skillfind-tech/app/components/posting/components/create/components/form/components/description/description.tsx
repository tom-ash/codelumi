import React from 'react'
import { LocalizedDescription } from './components/localized-description'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'

export const Description = () => {
  const { optional } = useTexts()

  return (
    <section className='description'>
      <SectionHeading
        name='description'
        suffix={<span className='suffix optional'>{optional}</span>}
      />
      <LocalizedDescription lang={'en'} />
      <LocalizedDescription lang={'pl'} />
    </section>
  )
}
