import React from 'react'
import { ManagedLink } from 'managed-inputs'

export default ({
  buttonManager
}) => {
  return <ManagedLink {...buttonManager()} />
}
