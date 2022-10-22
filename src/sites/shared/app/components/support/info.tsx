import React from 'react'
import SVG from './svg/svg'

type InfoProps = {
  message: string
}

export function Info(props: InfoProps) {
  const { message } = props

  return (
    <div className='info'>
      {/* @ts-ignore */}
      {/* <SVG name='info' />  */}
      {message}
    </div>
  )
}

export default Info
