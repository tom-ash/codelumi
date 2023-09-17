import React from 'react'
import { ManagedText } from 'managed-inputs'
import { useInputs } from '../../../functions/store/use-inputs'
import { useTexts } from '../../../functions/store/use-texts'
import { useDispatch } from 'react-redux'

export enum TextInputType {
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEL = 'tel',
  TEXT = 'text',
  URL = 'url',
  SEARCH = 'search',
}

interface TextInputInterface {
  (props: {
    inputKey: string
    containerClassNames?: string
    children?: React.ReactElement
    type?: TextInputType
    match?: RegExp
    disabled?: boolean
    onChangeCallback?(): void
    onClickCallback?(): void
    onEnter?(): void
  }): JSX.Element
}

// TODO: Add error handling!

export const TextInput: TextInputInterface = props => {
  const {
    inputKey,
    containerClassNames,
    children,
    type: customType,
    match,
    onChangeCallback,
    onClickCallback,
    onEnter: onEnterCallback,
    disabled,
  } = props
  const texts = useTexts()
  const dispatch = useDispatch()
  const value = useInputs()[inputKey]
  const label = texts[`${inputKey}InputLabel`]
  const placeholder = texts[`${inputKey}InputPlaceholder`]
  const classNames = { container: containerClassNames ? `${containerClassNames} text-input` : 'text-input' }
  const type = customType || TextInputType.TEXT
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onClick = () => {
    onClickCallback && onClickCallback()
  }
  const onChange = (value: string) => {
    setInputs({ [inputKey]: value })
    onChangeCallback && onChangeCallback()
  }
  const onEnter = () => {
    onEnterCallback && onEnterCallback()
  }

  const areaProps = {
    classNames,
    label,
    placeholder,
    value,
    children,
    type,
    match,
    onChange,
    onClick,
    disabled,
    onEnter,
  }

  return <ManagedText {...areaProps} />
}
