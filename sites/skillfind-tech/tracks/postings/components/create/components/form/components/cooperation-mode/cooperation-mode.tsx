import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useDispatch } from 'react-redux';
import { SectionHeading } from '../../../../../../../../../../common/components/support/headings/section-heading';

export const CooperationMode = () => {
  useStyles(styles);

  const { required, cooperationModeLegend } = useTexts();
  const { cooperationMode, cooperationModeRadio } = useInputs();
  const { name, options } = cooperationModeRadio;
  const dispatch = useDispatch();
  const setInputs = (value: any) => dispatch({ type: 'inputs', value });

  return (
    <section className="cooperation-mode-section">
      <SectionHeading
        name="cooperationMode"
        suffix={<span className="suffix required">{required}</span>}
      />
      <fieldset>
        <legend>{cooperationModeLegend}</legend>
        {options.map((option: { value: string; label: string }) => {
          const { value, label } = option;
          const id = `${name}_${value}`;

          return (
            <div>
              <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={() => setInputs({ cooperationMode: value })}
                checked={cooperationMode === value}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          );
        })}
      </fieldset>
    </section>
  );
};
