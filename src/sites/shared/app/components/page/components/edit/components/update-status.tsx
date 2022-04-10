import React from 'react'

interface UpdateStatus {
  updated: boolean
}

const UpdateStatus = (props: UpdateStatus) => {
  const { updated } = props

  const classNames = ['update-status']
  if (updated === true) classNames.push('ok')
  if (updated === false) classNames.push('error')

  return <div className={classNames.join(' ')} />
}

export default UpdateStatus
