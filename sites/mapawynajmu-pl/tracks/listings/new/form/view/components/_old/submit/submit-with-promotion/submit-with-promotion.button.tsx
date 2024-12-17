// import React from 'react';
// import { SubmitButton as BaseSubmitButton } from '../../../../../../../../../common/components/support/submit-button/submit-button';
// import { SVG } from '../../../../../../../../../common/components/support/svg/svg';
// import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

// interface SubmitButtonInterface {
//   (props: {
//     publish: (addPromotion?: boolean) => Promise<void>;
//   }): React.ReactElement;
// }

// export const SubmitWithPromotionButton: SubmitButtonInterface = ({
//   publish,
// }) => {
//   const { submitWithPromotionButtonLabel } = useTexts();

//   const label = (
//     <>
//       <SVG name="rocket" />
//       {submitWithPromotionButtonLabel}
//       <div className="price">19 PLN</div>
//     </>
//   );

//   const submitButtonProps = {
//     label,
//     submit: () => publish(true),
//   };

//   // @ts-ignore
//   return <BaseSubmitButton {...submitButtonProps} />;
// };
