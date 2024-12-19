import React from 'react';
import { SVG } from '../../../../../../../../../../../common/components/support/svg/svg';
import { useData } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useDispatch } from 'react-redux';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

interface FilterInterface {
  (props: { name: string; panel: React.ReactElement }): React.ReactElement;
}

export const Filter: FilterInterface = (props) => {
  const { name, panel } = props;
  const texts = useTexts();
  const inputs = useInputs();
  const dispatch = useDispatch();
  const value = inputs[name];
  const { [`${name}SvgName`]: svgName } = useData();
  const placeholder = texts[`${name}InputPlaceholder`];
  const setControl = (value: any) => dispatch({ type: 'control', value });
  const onClick = () => setControl({ [`${name}FilterPanel`]: true });

  return (
    <div className={`filter ${name}`}>
      <SVG name={svgName} />
      <div className="input" onClick={onClick}>
        {value ? value : placeholder}
      </div>
      {panel}
    </div>
  );
};
