import React from 'react'
import { FigureProps } from './figure.types'

const Figure = (props: FigureProps) => {
  const { content, caption } = props

  return (
    <figure>
      <span>{content}</span>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default Figure
