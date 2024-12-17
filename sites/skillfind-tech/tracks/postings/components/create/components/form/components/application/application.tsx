import React from 'react';
import {
  ApplicationManner,
  ApplicationMannerEnum,
} from './components/application-manner/application-manner';
import { SectionHeading } from '../../../../../../../../../../common/components/support/headings/section-heading';
import { InstructionsDeprecated } from '../../../../../../../../../../common/components/support/instructions_deprecated/instructions_deprecated';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { ApplicationLink } from './components/application-link/application-link';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useErrors } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-errors';

export const Application = () => {
  // const { applicationSectionInstructions } = useTexts()
  // const { linkApplicationManner } = useInputs()
  const { required } = useTexts();
  const { isApplicationError: isError } = useErrors();

  const classNames = ['application'];
  if (isError) {
    classNames.push('error');
  }

  return (
    <section id="application" className={classNames.join(' ')}>
      <SectionHeading
        name="application"
        suffix={<span className="suffix required">{required}</span>}
      />
      {/* <InstructionsDeprecated text={applicationSectionInstructions} />
      <ApplicationManner name={ApplicationMannerEnum.FORM} />
      <ApplicationManner name={ApplicationMannerEnum.LINK} />
      {linkApplicationManner && <ApplicationLink />} */}
      <ApplicationLink />
    </section>
  );
};
