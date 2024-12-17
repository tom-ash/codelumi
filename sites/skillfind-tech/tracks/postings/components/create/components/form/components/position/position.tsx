import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { SectionHeading } from '../../../../../../../../../../common/components/support/headings/section-heading';
import { TextInput } from '../../../../../../../../../../common/components/support/text-input-semanticize/text-input';
import { Instructions } from '../../../../../../../../../../common/components/support/instructions/instructions';
import { validatePosition } from './validators/validate-position';
import { useErrors } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-errors';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

export const Position = () => {
  useStyles(styles);

  const { required } = useTexts();
  const { position: error } = useErrors();

  return (
    <div className="position" id="position">
      <SectionHeading
        name="position"
        suffix={<span className="suffix required">{required}</span>}
      />
      <Instructions name="position" isError={!!error} />
      <TextInput inputKey="position" validate={validatePosition} />
    </div>
  );
};
