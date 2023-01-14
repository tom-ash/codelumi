import React, { useContext } from 'react'
import { ManagedText } from 'managed-inputs'
import { Dispatch } from 'redux'
import { genericAttributeUpdater } from './generic-attribute.updater'
import { genericAttributeValidator } from './generic-attribute.validator'
import { CellContext } from '../../common/cell/cell'

interface GenericAttributeInputProps {
  connecting: boolean
  attrName: string
  label: string
  value: string
  error: string
  match?: RegExp
  errorToSet: LangObject
  emptyErrorToSet: LangObject
  setConnecting(newConnecting: boolean): void
  setValue: React.Dispatch<React.SetStateAction<string>>
  dispatch: Dispatch
}

export const GenericAttributeInput = (props: GenericAttributeInputProps) => {
  const { connecting, setConnecting, attrName, label, value, error, match, errorToSet, setValue, dispatch } = props
  const { closeCell, getAccessToken } = useContext(CellContext)

  const inputProps = {
    classNames: { container: 'text-input' },
    label,
    value,
    error,
    onChange: (changedValue: string) => {
      setValue(changedValue)
    },
    onEnter: () => {
      genericAttributeUpdater({
        connecting,
        attrName,
        value,
        match,
        errorToSet,
        setConnecting,
        dispatch,
        closeCell,
        getAccessToken,
      })
    },
    onFocus: () => {
      dispatch({ type: 'user/edit/errors', value: { [attrName]: value } })
    },
    onBlur: () => {
      match &&
      genericAttributeValidator({
        value,
        match,
        errorToSet,
        dispatch,
      })
    },
  }

  return <ManagedText {...inputProps} />
}
