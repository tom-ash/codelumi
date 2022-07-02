import React from 'react'

interface YouTubeEmbedProps {
  width?: string,
  src: string
}

const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const {
    width,
    src
  } = props

  return (
    <iframe
      width={width || '100%'}
      style={{
        aspectRatio: '16/9'
      }}
      src={src}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  )
}

export default YouTubeEmbed