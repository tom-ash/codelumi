import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton as BaseSubmitButton } from '../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'

interface SubmitButtonInterface {
  (props: {
    publish: (addPromotion?: boolean) => Promise<void>
  }): React.ReactElement
}

export const SubmitWithoutBoostingButton: SubmitButtonInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state
  const { submitWithoutBoostingButton } = texts

  const label = (
    <>
      <SVG name='plus' />
      {submitWithoutBoostingButton}
      <div className='price'>
        0 PLN
      </div>
    </>
  )

  const submitButtonProps = {
    label,
    submit: () => publish(false),
    customContainerClassNames: 'create without-boosting',
  }

  // @ts-ignore
  return <BaseSubmitButton {...submitButtonProps} />
}
