import React from 'react';
import { TermsOfServiceConsentCheckbox } from './terms-of-service-consent.checkbox';
import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import { LinkData } from '../../../../../../../../../../lib/types/link-data';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';

interface TermsOfServiceConsentProps {
  value: boolean;
  error: string;
  isError: boolean;
  setInputs: SetInputs;
  setErrors: SetErrors;
  termsOfService: string;
  syntheticLabel: string;
  termsOfServiceLink: LinkData;
  styles: Styles;
}

export const TermsOfServiceConsent = (props: TermsOfServiceConsentProps) => {
  const {
    error,
    isError,
    value,
    setInputs,
    setErrors,
    termsOfService,
    syntheticLabel,
    termsOfServiceLink,
    styles,
  } = props;

  return (
    <div className={styles.container}>
      <TermsOfServiceConsentCheckbox
        value={value}
        setInputs={setInputs}
        setErrors={setErrors}
        termsOfService={termsOfService}
        syntheticLabel={syntheticLabel}
        termsOfServiceLink={termsOfServiceLink}
        styles={styles}
      />
      {isError && <div className={styles.error}>{error}</div>}
    </div>
  );
};
