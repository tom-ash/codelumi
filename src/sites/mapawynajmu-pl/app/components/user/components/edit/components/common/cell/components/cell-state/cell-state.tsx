import React from "react"
import { useStore } from "../../../../../../../../../../../shared/app/functions/store/useStore"

interface CellStateInterface {
  (props: {
    attrName: string
  }): React.ReactElement
}

export const CellState: CellStateInterface = (props) => {
  const {
    attrName,
  } = props

  const cellStateKey = `${attrName}CellState`
  const { state, dispatch } = useStore()
  const { inputs } = state
  const cellState = inputs[cellStateKey]
  const newCellState = !cellState
  const setCellState = (cellState: boolean) => dispatch({ type: 'inputs', value: { [cellStateKey]: cellState } })

  return <span onClick={() => setCellState(newCellState)}>TODO</span>
}