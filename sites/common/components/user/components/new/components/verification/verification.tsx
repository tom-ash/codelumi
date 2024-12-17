import {
  SetControl,
  SetErrors,
  SetInputs,
} from '../../../../../../../../lib/types/setters';
import { MainHeading } from '../../../../../support/headings/main-heading';
import { VerificationCodeInput } from './components/verification-code/verification-code';
import { VerifyButton } from './components/submit-button/verify-button';
import { Styles } from '../../../../../../../mapawynajmu-pl/types/styles';
// import { Line } from '../../../../../../../mapawynajmu-pl/tracks/common/components/line/line';

interface UsersNewCredentialsVerificationProps {
  lang: string;
  heading: string;
  verificationCode: string;
  connecting: boolean;
  inputLabel: string;
  inputError: string;
  inputIsError: string;
  buttonLabel: string;
  setControl: SetControl;
  setInputs: SetInputs;
  setErrors: SetErrors;
  containerStyles: Styles;
  headingStyles: Styles;
  inputStyles: Styles;
  buttonStyles: Styles;
}

export const UsersNewCredentialsVerification = (
  props: UsersNewCredentialsVerificationProps,
) => {
  const {
    lang,
    heading,
    verificationCode,
    connecting,
    inputLabel,
    inputError,
    inputIsError,
    buttonLabel,
    setControl,
    setInputs,
    setErrors,
    containerStyles,
    headingStyles,
    inputStyles,
    buttonStyles,
  } = props;

  return (
    <div className={containerStyles.container}>
      <MainHeading value={heading} styles={headingStyles} />
      {/* <Line /> */}
      {/* <div className="explanation">{verificationCodeExplanation}</div> */}
      <VerificationCodeInput
        value={verificationCode}
        label={inputLabel}
        error={inputError}
        isError={inputIsError}
        setInputs={setInputs}
        setErrors={setErrors}
        styles={inputStyles}
      />
      <VerifyButton
        lang={lang}
        apiUrl={process.env.NEXT_PUBLIC_MAPAWYNAJMU_PL_API_URL!}
        label={buttonLabel}
        verificationCode={verificationCode}
        connecting={connecting}
        setControl={setControl}
        setErrors={setErrors}
        styles={buttonStyles}
      />
    </div>
  );
};
