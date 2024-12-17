import React from 'react';
import { SVG } from '../../../../../../../common/components/support/svg/svg';
import { Line } from '../../../../common/components/line/line';
import { useTexts } from '../../../../../src copy/sites/shared/app/functions/store/use-texts';

interface SubmitWithPromotionInterface {
  (): React.ReactElement;
}

export const PromotionBenefits: SubmitWithPromotionInterface = () => {
  const { promotionBenefits, promotionBenefitsSummary } = useTexts();

  return (
    <div className="promotion-benefits">
      <ul>
        {promotionBenefits.map((benefit: { item: string }) => (
          <li key={benefit.item}>
            <SVG name="star" /> {benefit.item}
          </li>
        ))}
        <Line />
        <li className="people" key={promotionBenefitsSummary}>
          <SVG name="people" /> {promotionBenefitsSummary}
        </li>
      </ul>
    </div>
  );
};
