import React from 'react'

interface SocialImagePreviewInterface {
  (props: {
    children: React.ReactNode
  }): React.ReactElement
}

export const SocialImageCanvas: SocialImagePreviewInterface = props => {
  const {
    children
  } = props

  return (
    <div
      id='social-image-canvas'
      className='preview'
      // {...(scale && {
      //   style: {
      //     transform: `scale(${scale})`,
      //   },
      // })}
    >
      {children}
    </div>
  )
}
