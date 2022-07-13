import React from 'react'

const Image = (props: ImageProps) => {
  const { src, alt } = props
  const imgProps = {
    src,
    alt,
    crossOrigin: 'anonymous',
    key: src
  } as const

  return <img {...imgProps} loading='lazy' />
}

export default Image
