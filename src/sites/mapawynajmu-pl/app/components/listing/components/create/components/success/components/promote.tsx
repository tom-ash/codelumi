import React from 'react'
import { SubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { postApi } from '../../../../../../../../../shared/app/functions/fetch-api/fetch-api'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'

interface PromoteButtonInterface {
  (props: { listingId: number }): React.ReactElement
}

export const PromoteButton: PromoteButtonInterface = props => {
  const { listingId } = props
  const { promoteButtonLabel } = useTexts()

  const submit = () => {
    postApi({
      path: 'listings/promote',
      body: { listing_id: listingId },
    }).then(href => {
      // @ts-ignore
      window.gtag('event', 'promotion_added')

      location.href = href
    })
  }

  const label = (
    <>
      <SVG name='rocket' />
      {promoteButtonLabel}
      <div className='price'>19 PLN</div>
    </>
  )

  const submitButtonProps = {
    customContainerClassNames: 'promotion-button',
    label,
    submit,
  }

  // @ts-ignore TODO!
  return <SubmitButton {...submitButtonProps} />
}
