import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { CellOpener } from './components/cell-opener/cell-opener'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'

interface UserEditCellInterface {
  (props: {
    attrName: string
    children: React.ReactElement
  }): React.ReactElement

}

export const UserEditCell:UserEditCellInterface = (props) => {
  useStyles(styles)

  const { attrName, children } = props
  const { state } = useStore()
  const { texts, inputs } = state
  const {
    [`${attrName}Title`]: title,
    [`${attrName}Value`]: value,
  } = texts
  const cellOpenerProps = { attrName }
  const cellOpenedKey = `${attrName}CellOpened`
  const { [cellOpenedKey]: cellOpened } = inputs
  const cellContentClass = cellOpened ? 'opened' : 'closed'

  return (
    <div className='cell'>
      <div
        className='current'
        id='current'
      >
        <div className='text'>
          <div>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
          </div>
        </div>
        <div className='float-clear' />
      </div>
      <div className='trigger'>
        <CellOpener {...cellOpenerProps} />
      </div>
      <div className={`content ${cellContentClass}`}>
        {cellOpened && <>{children}</>}
      </div>
    </div>
  )
}
