import React from 'react'

export const Image = (props: ImageProps) => {
  const { src, alt, style, crossOrigin } = props
  const imgProps = {
    src,
    alt,
    key: src,
    style,
  } as const

  return (
    <img
      {...imgProps}
      crossOrigin={crossOrigin}
      loading='lazy'
    />
  )
}

export default Image
