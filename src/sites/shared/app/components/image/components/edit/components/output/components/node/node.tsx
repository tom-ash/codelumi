import React from 'react'
import { NodeProps } from './node.d'

const Node = (props: NodeProps) => {
  const {
    t: tag,
    c: content,
    attrs = {},
    children
  } = props
  
  if (!tag) return null
  if (tag === 'img') attrs['crossorigin'] = 'anonymous'

  if (children) {
    const childrenEls = children.map((child, index) => {
      const { t, c, attrs, children } = child
      const nodeProps = { t, c, attrs, children, key: index }

      return <Node {...nodeProps} />
    })

    return React.createElement(tag, attrs, childrenEls)
  }

  return React.createElement(tag, attrs, content)
}

export default Node
