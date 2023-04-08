import React from 'react'

type InfoProps = {
  message: string
}

export function Info(props: InfoProps) {
  const { message } = props

  return <div className='info'>{message}</div>
}

export default Info
