import React from 'react'
import Node from './components/node/node'
import { NodeProps } from './components/node/node.d'

interface OutputProps {
  width: string,
  height: string,
  bodyElements: NodeProps[]
}

const Output = (props: OutputProps) => {
  const {
    width,
    height,
    bodyElements
  } = props

  return (
    <div
      id='image-output'
      className='output'
      style={{
        width: +width,
        height: +height
      }}
    >
      {bodyElements.map((node, index) => {
        if (typeof node === 'string') {
          const nodeProps = { t: 'p', c: node }

          return <Node {...nodeProps} />
        }

        const { t, c, attrs, children } = node
        const nodeProps = { t, c, attrs, children, key: index }

        return <Node {...nodeProps} />
      })}
    </div>
  )
}

export default Output
