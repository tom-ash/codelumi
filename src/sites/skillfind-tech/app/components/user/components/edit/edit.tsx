import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { MainHeading } from '../../../../../../shared/app/components/support/headings/main-heading'
import { AttributeEditor } from '../../../../../../shared/app/components/support/attribute-editor/attribute-editor'
import { Logo } from './components/logo/logo'
import { Delete } from './components/delete/delete'

const UserUsersEdit = () => {
  useStyles(styles)

  return (
    <div id='user-users-edit'>
      <MainHeading icon='userCog' />
      <AttributeEditor name='businessName' />
      <AttributeEditor name='link' />
      <Logo />
      <AttributeEditor
        name='industry'
        isSelectable={true}
      />
      <Delete />
    </div>
  )
}

export default UserUsersEdit
