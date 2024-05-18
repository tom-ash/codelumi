import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { MainHeading } from '../../../../../../shared/app/components/support/headings/main-heading'
import { AttributeEditor } from '../../../../../../shared/app/components/support/attribute-editor/attribute-editor'

const UserUsersEdit = () => {
  useStyles(styles)

  return (
    <div id='user-users-edit'>
      <MainHeading icon='userCog' />
      <AttributeEditor name='businessName' />
      <AttributeEditor name='link' />
      <AttributeEditor
        name='industry'
        isSelectable={true}
      />
    </div>
  )
}

export default UserUsersEdit
