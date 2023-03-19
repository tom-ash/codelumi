import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { RenderNode } from '../../../../../support/render-node/render-node'

export const Output = () => {
  const { state } = useStore()
  const { data, inputs } = state
  const { body } = data
  const { width, height } = inputs

  const nodeProps = {
    node: {
      Root: body,
    },
  }

  return (
    <div
      id='image-output'
      className='output'
      style={{
        width: +width,
        height: +height,
        outline: '1px solid #E5E7E9',
      }}
    >
      <RenderNode {...nodeProps} />
    </div>
  )
}
