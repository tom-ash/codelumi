import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { updatePage as submit } from '../../functions/update-page'
import { SubmitButton } from '../../../../../support/submit-button/submit-button'

export const UpdatePageButton = () => {
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { updatePageButton: label } = texts
  const { updatePageApiUrl } = data
  const {
    id,
    url,
    canonicalUrl,
    online,
    body,
    publishedOn,
    modifiedOn,
    category,
    subcategory,
    title,
    pageLang,
    langAltsGroup,
    description,
    keywords,
    coverImage,
    schemaMode,
    autoSchema,
    manualSchema,
  } = inputs

  const submitButtonProps = {
    label,
    updatePageApiUrl,
    exitOnSave: false,
    id,
    url,
    canonicalUrl,
    online,
    body,
    publishedOn,
    modifiedOn,
    category,
    subcategory,
    title,
    pageLang,
    langAltsGroup,
    description,
    keywords,
    coverImage,
    schemaMode,
    autoSchema,
    manualSchema,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}
