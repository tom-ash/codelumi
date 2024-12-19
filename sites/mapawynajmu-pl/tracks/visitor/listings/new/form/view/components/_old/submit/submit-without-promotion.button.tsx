// // import React from 'react';
// // import { SubmitButton as BaseSubmitButton } from '../../../../../../../../common/components/support/submit-button/submit-button';
// // import { SVG } from '../../../../../../../../common/components/support/svg/svg';
// // import { useTexts } from '../../../../../../src copy/sites/shared/app/functions/store/use-texts';
// // import { useRender } from '../../../../../../src copy/sites/shared/app/functions/store/use-render';

// interface SubmitWithoutPromotionProps {
//   label: string;
//   publish: (addPromotion?: boolean) => Promise<void>;
// }

// export const SubmitWithoutPromotionButton = ({
//   publish,
// }: SubmitWithoutPromotionProps) => {

//   // const { 'announcement/edit': isEdit } = useRender();
//   // const svgName = isEdit ? 'penClip' : 'plus';

//   const label = (
//     <>
//       {/* <SVG name={svgName} /> */}
//       {/* {submitWithoutPromotionButtonLabel} */}
//       {/* {!isEdit && <div className="price">0 PLN</div>} */}
//     </>
//   );

//   const submitButtonProps = {
//     label,
//     submit: () => publish(false),
//     customContainerClassNames: 'create without-promotion',
//   };

//   // @ts-ignore
//   return <BaseSubmitButton {...submitButtonProps} />;
// };
