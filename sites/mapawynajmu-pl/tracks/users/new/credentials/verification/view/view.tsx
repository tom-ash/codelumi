import {
  SetControl,
  SetErrors,
  SetInputs,
} from '../../../../../../../../lib/types/setters';
import { UsersNewCredentialsVerification } from '../../../../../../../common/components/user/components/new/components/verification/verification';
import styles from '../../../../../../../common/styles/view.module.css';
import {
  UsersNewCredentialsVerificationApp,
  UsersNewCredentialsVerificationControl,
  UsersNewCredentialsVerificationErrors,
  UsersNewCredentialsVerificationInputs,
  UsersNewCredentialsVerificationTexts,
} from '../contract/contract';
import containerStyles from '../../../../../../../common/styles/container.module.css';
import headingStyles from '../../../../../../../common/styles/main-heading.module.css';
import inputStyles from '../../../../../common/styles/inputs/text.module.css';
import buttonStyles from '../../../../../common/styles/inputs/button.module.css';

const UsersNewCredentialsVerificationView = (props: {
  app: UsersNewCredentialsVerificationApp;
  control: UsersNewCredentialsVerificationControl;
  inputs: UsersNewCredentialsVerificationInputs;
  texts: UsersNewCredentialsVerificationTexts;
  errors: UsersNewCredentialsVerificationErrors;
  setControl: SetControl;
  setInputs: SetInputs;
  setErrors: SetErrors;
}) => {
  const {
    app: { lang },
    control: { connecting },
    inputs: { verificationCode },
    texts: {
      headingOne: heading,
      verificationCodeInputLabel: inputLabel,
      verificationCodeInputInvalidError: inputError,
      verifyButtonLabel: buttonLabel,
    },
    errors: { verificationCode: inputIsError },
    setControl,
    setInputs,
    setErrors,
  } = props;

  return (
    <div className={styles.view}>
      <UsersNewCredentialsVerification
        lang={lang}
        heading={heading}
        verificationCode={verificationCode}
        inputLabel={inputLabel}
        inputError={inputError}
        inputIsError={inputIsError}
        buttonLabel={buttonLabel}
        connecting={connecting}
        setControl={setControl}
        setInputs={setInputs}
        setErrors={setErrors}
        containerStyles={containerStyles}
        headingStyles={headingStyles}
        inputStyles={inputStyles}
        buttonStyles={buttonStyles}
      />
    </div>
  );
};

export default UsersNewCredentialsVerificationView;
