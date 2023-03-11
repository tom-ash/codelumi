import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { UserEditCell as Cell } from '../common/cell/cell'
import UserDelete from '../../../destroy/destroy'

export const UserEditDelete = () => {
  const { state } = useStore()
  const { texts } = state
  // const {
  //   accountDeletion,
  //   accountDeletionIrreversible,
  // } = texts

  const cellProps = {
    attrName: 'userDeletion'
  }

  return (
    <Cell {...cellProps}>
      <UserDelete />
    </Cell>
  )
}
