import React from 'react'

interface ImageProps {
  src: string
  alt: string
  style?: React.CSSProperties
  crossOrigin?: 'anonymous' | 'use-credentials'
  className?: string
}

export const Image = (props: ImageProps) => {
  const { src, alt, style, crossOrigin, className } = props
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
      className={className}
    />
  )
}

export default Image
