import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'

export const UpdateStatus = () => {
  const { state } = useStore()
  const { data } = state
  const { updated } = data

  const classNames = ['update-status']
  if (updated === true) classNames.push('ok')
  if (updated === false) classNames.push('error')

  return <div className={classNames.join(' ')} />
}
