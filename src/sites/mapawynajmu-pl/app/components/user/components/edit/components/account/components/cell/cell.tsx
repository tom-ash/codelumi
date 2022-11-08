import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
// import { langHandler } from '../../../../../../../../functions/lang-handler'

interface UserEditCellProps {
  title: string
  value: string | React.ReactElement
  edit: React.ReactElement
}

export const UserEditCell = (props: UserEditCellProps) => {
  useStyles(styles)
  // TODO: Use useState for trigger state.

  const {
    title,
    value,
    edit
  } = props

  return (
    <div className='cell'>
      <div className='current' id='current'>
        <div className='text'>
          <div>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
          </div>
        </div>
        <div className='float-clear' />
      </div>
      <div className='trigger'>TODO</div>
      <div className='edit'>
        {edit}
      </div>
    </div>
  )
}
