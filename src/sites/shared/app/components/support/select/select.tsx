import React, { useMemo } from 'react'
import { Select as SemanticSelect } from 'semanticize'
import { useTexts } from '../../../functions/store/use-texts'
import { useInputs } from '../../../functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { SVG } from '../svg/svg'

interface SelectInterface {
  (props: {
    selectKey: string
    className?: string
    children?: React.ReactElement
    onChangeCallback?(): void
    disabled?: boolean
    required?: boolean
    optional?: boolean
  }): JSX.Element
}

export const Select: SelectInterface = props => {
  const { selectKey, className, onChangeCallback, disabled, required = false, optional = false } = props
  const inputs = useInputs()
  const dispatch = useDispatch()
  const options = inputs[`${selectKey}SelectOptions`]
  const value = inputs[selectKey]
  const label = useTexts()[`${selectKey}SelectLabel`]
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onSelect = (value: string) => {
    setInputs({ [selectKey]: value })
    onChangeCallback && onChangeCallback()
  }

  const parsedOptions = useMemo(() => {
    return options.map((option: any) => {
      return {
        ...option,
        ...(option.icon && {
          jsx: (
            <>
              <span className='icon'>
                <SVG name={option.icon} />
              </span>
              <span className='text'>{option.text}</span>
            </>
          ),
        }),
      }
    })
  }, [options])

  return (
    <SemanticSelect
      className={className}
      label={
        <>
          {label}
          {required && (
            <SVG
              name='dot'
              className='required'
            />
          )}
          {optional && (
            <SVG
              name='emptyDot'
              className='optional'
            />
          )}
        </>
      }
      options={parsedOptions}
      value={value}
      onSelect={onSelect}
      // disabled={disabled}
    />
  )
}
