import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'

interface CellOpenerInterface {
  (props: { attrName: string }): React.ReactElement
}

export const CellOpener: CellOpenerInterface = props => {
  const { attrName } = props

  const cellOpenedKey = `${attrName}CellOpened`
  const { state, dispatch } = useStore()
  const { texts, control } = state
  const { [`${attrName}CellOpen`]: attrCellOpen, cellOpen, cellClose } = texts
  const { [cellOpenedKey]: cellOpened } = control
  const newCellOpened = !cellOpened
  const trigger = cellOpened ? cellClose : attrCellOpen || cellOpen
  const setCellOpener = (cellOpened: boolean) => dispatch({ type: 'control', value: { [cellOpenedKey]: cellOpened } })

  return <span onClick={() => setCellOpener(newCellOpened)}>{trigger}</span>
}
