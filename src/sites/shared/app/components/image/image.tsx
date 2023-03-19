import React from 'react'
import { useStore } from '../../functions/store/useStore'
import loadable from '@loadable/component'
const Index = loadable(() => import('./components/index'))
const Edit = loadable(() => import('./components/edit/edit'))

const Image = () => {
  const { state } = useStore()
  const { render } = state

  const {
    'image/index': renderIndex,
    'image/edit': renderEdit,
  } = render

  return (
    <section id='image'>
      {renderIndex && <Index />}
      {renderEdit && <Edit />}
    </section>
  )
}

export default Image
