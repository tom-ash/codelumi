import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { RenderNode } from '../../../../../support/render-node/render-node'

export const PageTile = () => {
  const { state: {
    data: {
      body,
    },
  } } = useStore()

  const nodeProps = {
    node: {
      root: body,
    },
  }

  return <RenderNode {...nodeProps} />
}
