import React from 'react'
import { Textarea } from '../../../../../../../../../../../../shared/app/components/support/textarea/textarea'

export const EnglishDescriptionTextarea = () => {
  const textareaProps = {
    textareaKey: 'englishDescription',
    containerClassNames: 'form-input body',
  }

  return <Textarea {...textareaProps} />
}
