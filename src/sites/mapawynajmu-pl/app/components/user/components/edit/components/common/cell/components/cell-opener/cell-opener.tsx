import React from "react"
import { useStore } from "../../../../../../../../../../../shared/app/functions/store/useStore"

interface CellOpenerInterface {
  (props: {
    attrName: string
  }): React.ReactElement
}

export const CellOpener: CellOpenerInterface = (props) => {
  const {
    attrName,
  } = props

  const cellOpenedKey = `${attrName}CellOpened`
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const {
    cellOpen,
    cellClose,
  } = texts
  const {
    [cellOpenedKey]: cellOpened
  } = inputs
  const newCellOpened = !cellOpened
  const trigger = cellOpened ? cellClose : cellOpen
  const setCellOpener = (cellOpened: boolean) => dispatch({ type: 'inputs', value: { [cellOpenedKey]: cellOpened } })

  return <span onClick={() => setCellOpener(newCellOpened)}>{trigger}</span>
}