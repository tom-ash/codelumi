import ManagedCheckbox from '../../../../../../../../../common/components/managed-inputs/checkbox/checkbox';
import { termsOfServiceConsentValidator } from './terms-of-service-consent.validator';
import { TermsOfServiceConsentLabel } from './terms-of-service-consent.label';
import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import { LinkData } from '../../../../../../../../../../lib/types/link-data';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';

interface TermsOfServiceConsentCheckboxProps {
  value: boolean;
  setInputs: SetInputs;
  setErrors: SetErrors;
  termsOfService: string;
  syntheticLabel: string;
  termsOfServiceLink: LinkData;
  styles: Styles;
}

export const TermsOfServiceConsentCheckbox = (
  props: TermsOfServiceConsentCheckboxProps,
) => {
  const {
    value,
    syntheticLabel,
    setInputs,
    setErrors,
    termsOfService,
    termsOfServiceLink,
    styles,
  } = props;
  const classNames = {
    input: styles.input,
    tick: styles.tick,
    label: styles.label,
  };
  const checked = value;
  const onClick = (termsOfServiceConsent: boolean) => {
    setInputs({ termsOfServiceConsent });
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors });
  };
  const label = (
    <TermsOfServiceConsentLabel
      syntheticLabel={syntheticLabel}
      termsOfService={termsOfService}
      termsOfServiceLink={termsOfServiceLink}
    />
  );
  const termsOfServiceConsentCheckboxProps = {
    classNames,
    checked,
    label,
    onClick,
  };

  return <ManagedCheckbox {...termsOfServiceConsentCheckboxProps} />;
};
