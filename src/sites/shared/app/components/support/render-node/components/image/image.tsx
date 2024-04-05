import React from 'react'

const Image = (props: ImageProps) => {
  const { src, alt, style } = props
  const imgProps = {
    src,
    alt,
    key: src,
    style,
  } as const

  return (
    <img
      {...imgProps}
      loading='lazy'
    />
  )
}

export default Image
