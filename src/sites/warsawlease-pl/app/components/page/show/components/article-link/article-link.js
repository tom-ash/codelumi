import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { linkManager } from './functions/managers.js'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const ArticleLink = props => {
  useStyles(styles)

  return <ManagedLink {...linkManager(props)}/>
}

export default ArticleLink
