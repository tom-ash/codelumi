import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'

interface SubmitButtonInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitAndBoostButton: SubmitButtonInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state
  const { submitAndBoostButton } = texts

  const label = (
    <>
      <SVG name='rocket' />
      {submitAndBoostButton}
      <div className='price'>
        19 PLN
      </div>
    </>
  )

  const submitButtonProps = {
    label,
    submit: () => publish(true),
    customContainerClassNames: 'create with-boosting',
  }

  // @ts-ignore
  return <BaseSubmitButton {...submitButtonProps} />
}
