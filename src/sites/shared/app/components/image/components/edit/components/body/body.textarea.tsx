import React from 'react'
import { Textarea } from '../../../../../support/textarea/textarea'
import { useDispatch } from 'react-redux'

export const BodyTextarea = () => {
  const dispatch = useDispatch()
  const setData = (value: any) => dispatch({ type: 'data', value })
  const onChangeCallback = () => setData({ updated: false })

  const textareaProps = {
    textareaKey: 'body',
    containerClassNames: 'form-input body',
    onChangeCallback,
  }

  return <Textarea {...textareaProps} />
}
