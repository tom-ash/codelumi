import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { linkManager } from './functions/managers.js'

const CodeLink = props => {
  return <ManagedLink {...linkManager(props)}/>
}

export default CodeLink
