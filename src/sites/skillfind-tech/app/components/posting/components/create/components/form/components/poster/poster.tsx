import React from 'react'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import loadable from '@loadable/component'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'
const Form = loadable(() => import('../../../../../../../user/components/new/components/form/form'))

export const Poster = () => {
  const { required } = useTexts()

  return (
    <section id='poster'>
      <SectionHeading
        name='poster'
        suffix={<span className='suffix required'>{required}</span>}
      />
      <Form isSubmittable={false} />
    </section>
  )
}
