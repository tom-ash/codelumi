import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { updatePage as submit } from '../../functions/update-page'
import { SubmitButton } from '../../../../../support/submit-button/submit-button'

interface UpdatePageButtonInterface {
  (props: { exitOnSave?: boolean }): React.ReactElement
}

export const UpdatePageButton: UpdatePageButtonInterface = props => {
  const { exitOnSave } = props
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { updatePageAndExitButtonLabel, updatePageButtonLabel } = texts
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
    label: exitOnSave ? updatePageAndExitButtonLabel : updatePageButtonLabel,
    customContainerClassNames: exitOnSave ? 'save-and-exit' : 'save',
    updatePageApiUrl,
    exitOnSave,
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
