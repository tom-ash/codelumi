import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { CellState } from './components/cell-state/cell-state'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'

// interface UserEditCellProps {
//   title: string
//   value: string | React.ReactElement
//   children: React.ReactElement | React.ReactElement[]
// }

interface UserEditCellInterface {
  (props: {
    attrName: string
    children: React.ReactElement
  }): React.ReactElement

}

export const UserEditCell:UserEditCellInterface = (props) => {
  useStyles(styles)

  const { attrName } = props

  const { state, dispatch } = useStore()
  const { texts } = state
  const {
    headingOne,
  } = texts


  // const triggerProps = {
  //   attrName: 'delete'
  // }

  return (
    <div className='cell'>
      <div
        className='current'
        id='current'
      >
        <div className='text'>
          <div>
            {/* <div className='title'>{title}</div>
            <div className='value'>{value}</div> */}
          </div>
        </div>
        <div className='float-clear' />
      </div>
      <div className='trigger'>
        {/* <CellState {...triggerProps} /> */}
      </div>
      {/* <div className={`edit ${trigger}`}>
        {trigger === TriggerStates.OPEN && <CellContext.Provider value={cellContext}>{children}</CellContext.Provider>}
      </div> */}
    </div>
  )
}
