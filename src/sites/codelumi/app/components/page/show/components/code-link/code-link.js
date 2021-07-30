import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { linkManager } from './functions/managers.js'

const CodeLink = props => {
  const { nodeContent: { published }, isAdmin } = props
  if (!published && !isAdmin) return null
  
  return <ManagedLink {...linkManager(props)}/>
}

export default CodeLink
