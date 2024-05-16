import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { SectionHeading } from '../../../../../../../../shared/app/components/support/headings/section-heading'

interface DescriptionInterface {
  (props: {}): React.ReactElement | null
}

export const Description: DescriptionInterface = () => {
  const {
    posting: { description },
  } = useData()

  if (!description) {
    return null
  }

  return (
    <section id='description'>
      <SectionHeading name='description' icon='quoteLeft' />
      <div
        className='description'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  )
}
