import React from 'react'
import { UserEditCell as Cell } from '../common/cell/cell'
import { UserDelete } from '../../../delete/delete'

export const UserEditDelete = () => {
  const cellProps = {
    attrName: 'userDelete'
  }

  return (
    <Cell {...cellProps}>
      <UserDelete />
    </Cell>
  )
}
