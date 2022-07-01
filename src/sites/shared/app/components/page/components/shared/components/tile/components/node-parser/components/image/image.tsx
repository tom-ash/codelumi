import React from 'react'

interface ImageProps {
  src: string,
  alt: string
}

const Image = (props: ImageProps) => {
  const { src, alt } = props
  const imgProps = { src, alt }

  return <img {...imgProps} loading='lazy' />
}

export default Image
