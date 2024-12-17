import React from 'react';
import { LocalizedDescription } from './components/localized-description';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { SectionHeading } from '../../../../../../../../../../common/components/support/headings/section-heading';

export const Description = () => {
  const { optional } = useTexts();

  return (
    <section className="description">
      <SectionHeading
        name="description"
        suffix={<span className="suffix optional">{optional}</span>}
      />
      <LocalizedDescription lang={'en'} />
      <LocalizedDescription lang={'pl'} />
    </section>
  );
};
