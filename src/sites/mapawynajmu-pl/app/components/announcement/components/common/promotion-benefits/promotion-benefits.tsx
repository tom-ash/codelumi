import React from 'react'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'
import { Line } from '../../../../support/components/line/line'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'

interface SubmitWithBoostingInterface {
  (): React.ReactElement
}

export const PromotionBenefits: SubmitWithBoostingInterface = () => {
  const { state: { texts: { promotionBenefits, promotionBenefitsSummary }} } = useStore()

  return (
    <div className='promotion-benefits'>
      <ul>
        {promotionBenefits.map((benefit: { item: string }) => (
          <li>
            <SVG name='star' /> {benefit.item}
          </li>
        ))}
        <Line />
        <li className='people'>
          <SVG name='people' /> {promotionBenefitsSummary}
        </li>
      </ul>
    </div>
  )
}
