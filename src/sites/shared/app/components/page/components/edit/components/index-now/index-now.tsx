import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { Button } from './components/button/button'

interface IndexNowInterface {
  (): React.ReactElement
}

export const IndexNow: IndexNowInterface = () => {
  const { state } = useStore()
  const { data } = state
  const { indexNowPingedAt } = data

  return (
    <div className='index-now'>
      <div className='pinged-at'>{indexNowPingedAt}</div>
      <Button />
    </div>
  )
}
