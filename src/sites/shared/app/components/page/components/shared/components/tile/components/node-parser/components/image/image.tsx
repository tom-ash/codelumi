import React from 'react'

interface ImageProps {
  s: string,
  a: string
}

const Image = (props: ImageProps) => {
  const { s: src, a: alt } = props
  const imageProps = { src, alt }

  return <img {...imageProps} loading='lazy' />
}

export default Image
