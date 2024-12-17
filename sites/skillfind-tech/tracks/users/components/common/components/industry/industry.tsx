import React from 'react';
import { Select } from '../../../../../../../../common/components/support/select/select';
import { useInputs } from '../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { SVG } from '../../../../../../../../common/components/support/svg/svg';

export const Industry = (props: { isEdited?: boolean }) => {
  const { isEdited } = props;
  const { industry: industryValue, industrySelectOptions } = useInputs();

  const industry = industrySelectOptions.find((industrySelectOption: any) => {
    return industrySelectOption.value === industryValue;
  });

  return (
    <div className="industry">
      <div className="icon">
        <SVG name={industry.icon} />
      </div>
      <Select
        selectKey="industry"
        required={true}
        className="select"
        disabled={!isEdited}
      />
    </div>
  );
};
