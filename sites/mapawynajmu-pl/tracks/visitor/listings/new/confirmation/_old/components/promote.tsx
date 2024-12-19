import React from 'react';
import { SubmitButton } from '../../../../../../../../../common/components/support/submit-button/submit-button';
import { SVG } from '../../../../../../../../../common/components/support/svg/svg';
import { postApi } from '../../../../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { changeUrl } from '../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';

interface PromoteButtonInterface {
  (props: { listingId: number }): React.ReactElement;
}

export const PromoteButton: PromoteButtonInterface = (props) => {
  const { listingId } = props;
  const { promoteButtonLabel } = useTexts();

  const submit = () => {
    postApi({
      path: 'listings/promote',
      body: { listing_id: listingId },
    }).then((href) => {
      // @ts-ignore
      window.gtag('event', 'promotion_added');

      changeUrl({ href });
    });
  };

  const label = (
    <>
      <SVG name="rocket" />
      {promoteButtonLabel}
      <div className="price">19 PLN</div>
    </>
  );

  const submitButtonProps = {
    customContainerClassNames: 'promotion-button',
    label,
    submit,
  };

  // @ts-ignore TODO!
  return <SubmitButton {...submitButtonProps} />;
};
