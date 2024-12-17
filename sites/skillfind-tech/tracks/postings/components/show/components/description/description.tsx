import React from 'react';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { SectionHeading } from '../../../../../../../../common/components/support/headings/section-heading';

interface DescriptionInterface {
  (props: {}): React.ReactElement | null;
}

export const Description: DescriptionInterface = () => {
  const {
    posting: { description },
  } = useData();

  if (!description) {
    return null;
  }

  return (
    <section id="description">
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
};
