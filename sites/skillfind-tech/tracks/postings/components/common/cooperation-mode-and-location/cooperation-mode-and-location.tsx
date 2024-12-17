import React from 'react';
import { SVG } from '../../../../../../../common/components/support/svg/svg';
import { FloatClear } from '../../../../../../../common/components/support/float-clear/float-clear';

interface CooperationModeAndLocationInterface {
  (props: {
    locality?: string;
    country?: string;
    cooperationMode: {
      icon: string;
      label: string;
      symbol: string;
    };
  }): React.ReactElement;
}

export const CooperationModeAndLocation: CooperationModeAndLocationInterface = (
  props,
) => {
  const { locality, country, cooperationMode } = props;
  const { symbol: cooperationModeSymbol, label: cooperationModeLabel } =
    cooperationMode;

  return (
    <section className="cooperation-mode-and-location">
      <span className="cooperation-mode">{cooperationModeLabel}</span>
      <SVG name={cooperationModeSymbol} />
      <span className="location">
        {locality}, {country}
      </span>
    </section>
  );
};
