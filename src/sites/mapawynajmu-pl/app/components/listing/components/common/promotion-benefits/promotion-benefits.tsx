import React from 'react'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'
import { Line } from '../../../../support/components/line/line'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'

interface SubmitWithPromotionInterface {
  (): React.ReactElement
}

export const PromotionBenefits: SubmitWithPromotionInterface = () => {
  const {
    state: {
      texts: { promotionBenefits, promotionBenefitsSummary },
    },
  } = useStore()

  return (
    <div className='promotion-benefits'>
      <ul>
        {promotionBenefits.map((benefit: { item: string }) => (
          <li key={benefit.item}>
            <SVG name='star' /> {benefit.item}
          </li>
        ))}
        <Line />
        <li className='people' key={promotionBenefitsSummary}>
          <SVG name='people' /> {promotionBenefitsSummary}
        </li>
      </ul>
    </div>
  )
}
