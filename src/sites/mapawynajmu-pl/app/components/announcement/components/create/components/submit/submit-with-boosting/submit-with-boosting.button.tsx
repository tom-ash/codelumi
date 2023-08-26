import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface SubmitButtonInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithBoostingButton: SubmitButtonInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state
  const { submitWithBoostingButtonLabel } = texts

  const label = (
    <>
      <SVG name='rocket' />
      {submitWithBoostingButtonLabel}
      <div className='price'>19 PLN</div>
    </>
  )

  const submitButtonProps = {
    label,
    submit: () => publish(true),
  }

  // @ts-ignore
  return <BaseSubmitButton {...submitButtonProps} />
}
