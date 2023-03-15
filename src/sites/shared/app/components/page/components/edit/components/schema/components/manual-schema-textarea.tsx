import React from 'react'
import { Textarea } from '../../../../../../support/textarea/textarea'

export const ManualSchemaTextarea = () => {
  const textareaProps = {
    textareaKey: 'manualSchema',
    containerClassNames: 'form-input schema',
  }

  return <Textarea {...textareaProps} />
}
