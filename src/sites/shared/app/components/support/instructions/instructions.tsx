import React from 'react'

type InfoProps = {
  text: string
}

export const Instructions = (props: InfoProps) => {
  const { text } = props

  return (
    <div className='instructions'>
      {text}
    </div>
  )
}
