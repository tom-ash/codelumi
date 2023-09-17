import React from 'react'
import { Textarea } from '../../../../../../../../../../../../shared/app/components/support/textarea/textarea'

export const PolishDescriptionTextarea = () => {
  const textareaProps = {
    textareaKey: 'polishDescription',
    containerClassNames: 'form-input body',
  }

  return <Textarea {...textareaProps} />
}
