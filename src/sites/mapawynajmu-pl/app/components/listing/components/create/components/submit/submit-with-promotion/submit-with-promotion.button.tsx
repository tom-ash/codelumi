import React from 'react'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'

interface SubmitButtonInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithPromotionButton: SubmitButtonInterface = ({ publish }) => {
  const { submitWithPromotionButtonLabel } = useTexts()

  const label = (
    <>
      <SVG name='rocket' />
      {submitWithPromotionButtonLabel}
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
