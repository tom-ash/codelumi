import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { RenderNode } from '../../../../../support/render-node/render-node'

const PageTile = () => {
  const { state: {
    data: {
      body
    }
  } } = useStore()

  const jsonBody = (() => {
    try {
      return typeof body === 'object' ? body : JSON.parse(body)
    } catch {
      return null
    }
  })()

  const nodeProps = {
    node: {
      root: jsonBody,
    },
    jsonBody,
  }

  return <RenderNode {...nodeProps} />
}

export default PageTile
