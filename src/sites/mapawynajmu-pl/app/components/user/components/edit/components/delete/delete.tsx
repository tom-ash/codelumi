import React from 'react'
import { UserEditCell as Cell } from '../common/cell/cell'
import UserDelete from '../../../destroy/destroy'

export const UserEditDelete = () => {
  const cellProps = {
    attrName: 'userDeletion'
  }

  return (
    <Cell {...cellProps}>
      <UserDelete />
    </Cell>
  )
}
