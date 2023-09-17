import React from 'react'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'

interface SubmitWithoutPromotionInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithoutPromotionButton: SubmitWithoutPromotionInterface = ({ publish }) => {
  const { submitWithoutPromotionButtonLabel } = useTexts()

  const label = (
    <>
      <SVG name='plus' />
      {submitWithoutPromotionButtonLabel}
      <div className='price'>0 PLN</div>
    </>
  )

  const submitButtonProps = {
    label,
    submit: () => publish(false),
    customContainerClassNames: 'create without-promotion',
  }

  // @ts-ignore
  return <BaseSubmitButton {...submitButtonProps} />
}
