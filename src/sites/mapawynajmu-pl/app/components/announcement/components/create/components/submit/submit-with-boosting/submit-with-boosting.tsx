import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitWithBoostingButton } from './submit-with-boosting.button'
import { PromotionBenefits } from '../../../../common/promotion-benefits/promotion-benefits'

interface SubmitWithBoostingInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithBoosting: SubmitWithBoostingInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state

  return (
    <div className='with-boosting'>
      <SubmitWithBoostingButton publish={publish} />
      <PromotionBenefits />
    </div>
  )
}
