import React from 'react'
import { NodeProps } from './node.d'

const Node = (props: NodeProps) => {
  const {
    tag,
    content,
    attrs
  } = props
  
  if (!tag) return null
  if (tag === 'img') attrs['crossorigin'] = 'anonymous'

  return React.createElement(tag, attrs || {}, content)
}

export default Node
