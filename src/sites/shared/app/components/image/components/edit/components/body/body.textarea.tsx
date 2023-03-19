import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { Textarea } from '../../../../../support/textarea/textarea'

export const BodyTextarea = () => {
  const { dispatch } = useStore()

  const setData = (value: any) => dispatch({ type: 'data', value })
  const onChangeCallback = () => setData({ updated: false })

  const textareaProps = {
    textareaKey: 'body',
    containerClassNames: 'form-input body',
    onChangeCallback,
  }

  return <Textarea {...textareaProps} />
}
