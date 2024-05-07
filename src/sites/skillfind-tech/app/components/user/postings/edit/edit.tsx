import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import PostingsForm from '../../../posting/components/create/components/form/form'

const UserPostingsEdit = () => {
  useStyles(styles)

  return (
    <div id='user-postings-edit'>
      <PostingsForm />
    </div>
  )
}

export default UserPostingsEdit
