import React from 'react'
import { RenderNode } from '../../../../../support/render-node/render-node'
import { useData } from '../../../../../../functions/store/use-data'

export const PageTile = () => {
  const { body } = useData()

  const nodeProps = {
    node: {
      Root: body,
    },
  }

  return <RenderNode {...nodeProps} />
}
