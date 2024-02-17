import React from 'react'
// import { useInputs } from '../../../functions/store/use-inputs'
import { useTexts } from '../../../functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { TextInput } from 'semanticize'

interface TextInputInterface {
  (props: {
    inputKey: string
    onBlur?(value?: string): void
    error?: string;
    // className?: string
    // match?: RegExp
    // disabled?: boolean
    // onChange?(): void
    // onChange?(): void
    // onClick?(): void
    // onFocus?(): void
    // onEnter?(): void
  }): React.ReactElement
}

// TODO: Add error handling!

export const TypedTextInput: TextInputInterface = props => {
  const {
    inputKey,
    onBlur: onBlurCallback,
    error,
    // classNames,
    // match,
    // onChange: onChangeCallback,
    // onClick: onClickCallback,
    // onEnter: onEnterCallback,
    // disabled,
  } = props
  const texts = useTexts()
  const dispatch = useDispatch()
  // const value = useInputs()[inputKey]
  const label = texts[`${inputKey}InputLabel`]
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onChange = (value: string) => {
    setInputs({ [inputKey]: value })
    // onChangeCallback && onChangeCallback()
  }
  const onBlur = (value: string) => {
    onBlurCallback && onBlurCallback(value)
  }

  return (
    <TextInput
      className='typed-text-input'
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      // error={error}
    />
  )
}
