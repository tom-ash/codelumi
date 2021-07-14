import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { linkManager } from './functions/managers.js'

const ArticleLink = props => {
  return <ManagedLink {...linkManager(props)}/>
}

export default ArticleLink
