import React from 'react'
import { SubmitWithPromotionButton } from './submit-with-promotion.button'
import { PromotionBenefits } from '../../../../common/promotion-benefits/promotion-benefits'

interface SubmitWithPromotionInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithPromotion: SubmitWithPromotionInterface = ({ publish }) => {
  return (
    <div className='with-promotion'>
      <SubmitWithPromotionButton publish={publish} />
      <PromotionBenefits />
    </div>
  )
}
