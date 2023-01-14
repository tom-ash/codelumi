import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { ButtonSpinner } from '../../../../../../../../support/components/button-spinner/button-spinner'
import { CellContext } from '../../common/cell/cell'
import { useContext } from 'react'
import { genericAttributeUpdater } from './generic-attribute.updater'
import { Dispatch } from 'redux'

interface GenericAttributeSubmitProps {
  label: string
  connecting: boolean
  attrName: string
  value: string
  match?: RegExp
  error: string
  errorToSet: LangObject
  setConnecting(connecting: boolean): void
  dispatch: Dispatch
}

export const GenericAttributeSubmit = (props: GenericAttributeSubmitProps) => {
  const { label, connecting, attrName, value, match, errorToSet, setConnecting, dispatch } = props

  const { closeCell, getAccessToken } = useContext(CellContext)

  const buttonSpinnerProps = {
    label,
    connecting,
  }

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: <ButtonSpinner {...buttonSpinnerProps} />,
    onClick: () =>
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
      }),
  }

  return <ManagedButton {...buttonProps} />
}
