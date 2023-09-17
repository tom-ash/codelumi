import React from 'react'
import { useData } from '../../../../../../functions/store/use-data'

export const UpdateStatus = () => {
  const { updated } = useData()

  const classNames = ['update-status']
  if (updated === true) classNames.push('ok')
  if (updated === false) classNames.push('error')

  return <div className={classNames.join(' ')} />
}
