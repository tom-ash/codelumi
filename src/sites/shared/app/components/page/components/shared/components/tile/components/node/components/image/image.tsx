import React from 'react'

const Image = (props: ImageProps) => {
  const { src, alt } = props
  const imgProps = {
    src,
    alt,
    crossorigin: 'anonymous'
  }

  return <img {...imgProps} loading='lazy' />
}

export default Image
