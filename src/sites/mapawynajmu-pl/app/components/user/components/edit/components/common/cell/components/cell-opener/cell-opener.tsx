import React from 'react'
import { useTexts } from '../../../../../../../../../../../shared/app/functions/store/use-texts'
import { useControl } from '../../../../../../../../../../../shared/app/functions/store/use-control'
import { useDispatch } from 'react-redux'

interface CellOpenerInterface {
  (props: { attrName: string }): React.ReactElement
}

export const CellOpener: CellOpenerInterface = props => {
  const { attrName } = props
  const cellOpenedKey = `${attrName}CellOpened`
  const { [`${attrName}CellOpen`]: attrCellOpen, cellOpen, cellClose } = useTexts()
  const { [cellOpenedKey]: cellOpened } = useControl()
  const dispatch = useDispatch()
  const newCellOpened = !cellOpened
  const trigger = cellOpened ? cellClose : attrCellOpen || cellOpen
  const setCellOpener = (cellOpened: boolean) => dispatch({ type: 'control', value: { [cellOpenedKey]: cellOpened } })

  return <span onClick={() => setCellOpener(newCellOpened)}>{trigger}</span>
}
