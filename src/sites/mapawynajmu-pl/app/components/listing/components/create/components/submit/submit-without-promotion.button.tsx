import React from 'react'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useRender } from '../../../../../../../../shared/app/functions/store/use-render'

interface SubmitWithoutPromotionInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithoutPromotionButton: SubmitWithoutPromotionInterface = ({ publish }) => {
  const { submitWithoutPromotionButtonLabel } = useTexts()
  const { 'announcement/edit': isEdit } = useRender()
  const svgName = isEdit ? 'penClip' : 'plus'

  const label = (
    <>
      <SVG name={svgName} />
      {submitWithoutPromotionButtonLabel}
      {!isEdit && <div className='price'>0 PLN</div>}
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
