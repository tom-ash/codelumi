import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitWithPromotionButton } from './submit-with-promotion.button'
import { PromotionBenefits } from '../../../../common/promotion-benefits/promotion-benefits'

interface SubmitWithPromotionInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithPromotion: SubmitWithPromotionInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state

  return (
    <div className='with-boosting'>
      <SubmitWithPromotionButton publish={publish} />
      <PromotionBenefits />
    </div>
  )
}
