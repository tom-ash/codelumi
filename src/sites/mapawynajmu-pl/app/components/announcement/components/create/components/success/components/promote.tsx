import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { postApi } from '../../../../../../../../../shared/app/functions/fetch-api/fetch-api'

export const PromoteButton = () => {
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { promoteButtonLabel } = texts
  const { emailAddress, password } = inputs
  const { announcement: { id: listing_id, isPromoted }} = data

  if (isPromoted) {
    return null
  }

  const submit = () => {
    postApi({
      path: 'listings/promote',
      body: { listing_id },
    })
    .then(href => {
      // @ts-ignore
      window.gtag('event', 'promotion_added');

      location.href = href;
    })
  }

  const label = (
    <>
      <SVG name='rocket' />
      {promoteButtonLabel}
    </>
  )

  const submitButtonProps = {
    customContainerClassNames: 'action-button promote',
    label,
    email: emailAddress,
    password,
    submit,
  }

  // @ts-ignore TODO!
  return <SubmitButton {...submitButtonProps} />
}
