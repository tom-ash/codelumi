import React from 'react';
import { useData } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { Line } from '../../../../../../../../../mapawynajmu-pl/tracks/common/components/line/line';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { Link as SupportLink } from '../../../../../../../../../../common/components/support/link/link';

export const Link = () => {
  const {
    posting: { applicationLink },
  } = useData();

  const { applyButtonLabel } = useTexts();

  return (
    <>
      <section className="application-link">
        <SupportLink
          href={applicationLink}
          lang={'en'} // TODO
          label={applyButtonLabel}
          title={applicationLink}
          external={true}
        />
      </section>
      <Line />
    </>
  );
};
