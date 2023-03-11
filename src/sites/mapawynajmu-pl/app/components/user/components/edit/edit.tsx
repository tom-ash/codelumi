import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import { Heading } from '../../../support/components/heading'
import { Line } from '../../../support/components/line/line'
import { UserEditCell as Cell } from './components/common/cell/cell'
import UserDelete from '../destroy/destroy'
import { UserEditDelete as Delete } from './components/delete/delete'

const UserEdit = () => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { texts } = state
  const {
    headingOne,
  } = texts

  const headingProps = {
    tier: 1,
    text: headingOne
  }

  return (
    <div id='user-edit'>
      <div className='container'>
        <Heading {...headingProps} />
        <Line />
        <Delete />
      </div>
    </div>
  )
}

export default UserEdit
