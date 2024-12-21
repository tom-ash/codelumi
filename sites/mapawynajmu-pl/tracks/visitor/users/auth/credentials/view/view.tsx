import { UsersAuthCredentialsContract } from '../contract/contract';
import { MainHeading } from '../../../../../../../common/components/support/headings/main-heading';
import viewStyles from '../../../../../../../common/styles/view.module.css';
import containerStyles from '../../../../../../../common/styles/container.module.css';
import mainHeadingStyles from '../../../../../../../common/styles/main-heading.module.css';
import textInputStyles from '../../../../../common/styles/inputs/text.module.css';
import { EmailAddressInput } from '../../../../../../../common/components/user/components/common/components/email-address/email-address.input';
import {
  PasswordAutoComplete,
  PasswordInput,
} from '../../../../../../../common/components/user/components/common/components/password/password.input';
import { CredentialsError } from '../../../../../../../common/components/user/components/auth/components/sign-in/components/credentials-error';
import { SubmitButton } from '../../../../../../../common/components/support/submit-button/submit-button';
import { useCallback } from 'react';
import buttonStyles from '../../../../../common/styles/inputs/button.module.css';
import { useRouter } from 'next/navigation';
import { signIn } from './connectors/sign-in';
import { Link } from '../../../../../../../common/components/support/link/link';
import styles from './view.module.css';

const UsersAuthCredentials = (props: UsersAuthCredentialsContract) => {
  const {
    app: { lang },
    control: { connecting },
    texts: {
      headingOne,
      emailInputLabel,
      emailInputPlaceholder,
      emailInputInvalidError,
      passwordInputLabel,
      passwordInputPlaceholder,
      passwordInputInvalidError,
      credentialsInvalidError,
    },
    inputs: { emailAddress, password },
    errors: {
      emailAddress: isEmailAddressError,
      password: isPasswordError,
      credentials: isCredentialsError,
    },
    links: { 'user/password-reset': usersPasswordResetLinkData },
    setControl,
    setInputs,
    setErrors,
  } = props;

  const router = useRouter();

  const submit = useCallback(
    () =>
      signIn({
        lang,
        email: emailAddress,
        password,
        setControl,
        setErrors,
        router,
      }),
    [lang, emailAddress, password],
  );

  return (
    <div className={viewStyles.view}>
      <div className={`${containerStyles.container} ${styles.container}`}>
        <MainHeading value={headingOne} styles={mainHeadingStyles} />
        {/* <Line /> */}
        <form>
          <EmailAddressInput
            label={emailInputLabel}
            placeholder={emailInputPlaceholder}
            error={emailInputInvalidError}
            value={emailAddress}
            setInputs={setInputs}
            setErrors={setErrors}
            styles={textInputStyles}
            isError={isEmailAddressError}
          />
          <PasswordInput
            autoComplete={PasswordAutoComplete.NEW_PASSWORD}
            label={passwordInputLabel}
            placeholder={passwordInputPlaceholder}
            error={passwordInputInvalidError}
            value={password}
            setInputs={setInputs}
            setErrors={setErrors}
            styles={textInputStyles}
            isError={isPasswordError}
          />
          <CredentialsError
            error={credentialsInvalidError}
            isError={isCredentialsError}
            className={styles.credentialsError}
          />
          <SubmitButton
            label={'TODO'}
            connecting={connecting}
            setControl={setControl}
            submit={submit}
            styles={buttonStyles}
          />
        </form>
        {/* <Line /> */}
        <Link
          data={{ ...usersPasswordResetLinkData, label: 'TODO' }}
          className={styles.resetPassword}
        />
      </div>
    </div>
  );
};

export default UsersAuthCredentials;
