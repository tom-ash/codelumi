import React, { ReactNode } from 'react'
import { useTexts } from '../../../functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { TextInput as SemanticTextInput } from 'semanticize'
import { useInputs } from '../../../functions/store/use-inputs'
import { useErrors } from '../../../functions/store/use-errors'

interface TextInputInterface {
  (props: {
    inputKey: string
    onChange?(value?: string): void
    onBlur?(value?: string): void
    validate?(params: any): void // TODO!
    children?: ReactNode;
    // placeholder?: string
    // className?: string
    // match?: RegExp
    // disabled?: boolean
    // onClick?(): void
    // onFocus?(): void
    // onEnter?(): void
  }): React.ReactElement
}

// TODO: Add error handling!

export const TextInput: TextInputInterface = props => {
  const {
    inputKey,
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    validate,
    children,
    // classNames,
    // match,
    // onClick: onClickCallback,
    // onEnter: onEnterCallback,
    // disabled,
  } = props
  const texts = useTexts()
  const errors = useErrors()

  const id = texts[`${inputKey}Id`]
  const label = texts[`${inputKey}InputLabel`]
  const placeholder = texts[`${inputKey}InputPlaceholder`]
  const errorMessage = texts[`${inputKey}InputInvalidError`]
  const value = useInputs()[inputKey]
  const error = errors[`${inputKey}`]

  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onChange = (value: string) => {
    setInputs({ [inputKey]: value })
    onChangeCallback && onChangeCallback()
  }
  const onBlur = (value: string) => {
    onBlurCallback && onBlurCallback(value)
    validate &&
      validate({
        value,
        errorMessage,
        setErrors,
      })
  }
  const onFocus = () => {
    setErrors({ [inputKey]: null })
  }

  return (
    <SemanticTextInput
      id={id}
      value={value}
      className='text-input'
      label={label}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      placeholder={placeholder}
      children={children}
    />
  )
}
