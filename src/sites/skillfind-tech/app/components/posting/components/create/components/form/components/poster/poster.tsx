import React from 'react';
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts';
import loadable from '@loadable/component'
const Form = loadable(() => import('../../../../../../../user/components/new/components/form/form'));

export const Poster = () => {
  const { posterHeading: heading } = useTexts()

  return (
    <section className='poster'>
      <h2>{heading}</h2>
      <Form isSubmittable={false} />
    </section>
  )
}
