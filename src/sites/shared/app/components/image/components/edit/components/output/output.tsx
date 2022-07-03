import React from 'react'
import Node from './components/node/node'

type NodeProps = string | {
  t: string,
  c?: string,
  attrs?: object
}

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
          const nodeProps = { tag: 'p', content: node, attrs: {} }

          return <Node {...nodeProps} />
        }

        const { t: tag, c: content, attrs = {} } = node
        const nodeProps = { tag, content, attrs, key: index }

        return <Node {...nodeProps} />
      })}
    </div>
  )
}

export default Output
