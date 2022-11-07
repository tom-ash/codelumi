import React from 'react'
// import { langHandler } from '../../../../../../../../functions/lang-handler'

interface UserEditCellProps {
  title: string
  value: string | React.FunctionComponent
  edit: React.FunctionComponent
}

const UserEditCell = (props: UserEditCellProps) => {
  // TODO: Use useState for trigger state.

  const {
    // title,
    // value,
    edit
  } = props

  return (
    <div className='cell'>
      <div className='current' id='current'>
        <div className='text'>
          <div>
            <div className='title'>TODO</div>
            <div className='value'>TODO</div>
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
