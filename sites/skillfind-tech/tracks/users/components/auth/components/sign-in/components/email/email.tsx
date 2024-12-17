import React from 'react';
import { EmailAddressInput } from '../../../../../../../../../../common/components/user/components/common/components/email-address/email-address.input';
import { PasswordInput } from '../../../../../../../../../../common/components/user/components/common/components/password/password.input';
import { PasswordAutoComplete } from '../../../../../../../../../../common/components/user/components/common/components/password/password.input';
import { passwordValidator } from '../../../../../../../../../../common/components/user/components/auth/components/sign-in/components/password/password.validator';
import { SignInButton } from './components/sign-in-button';
import { CredentialsError } from '../../../../../../../../../../common/components/user/components/auth/components/sign-in/components/credentials-error';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { DeprecatedLink } from '../../../../../../../../../../common/components/support/deprecated-link/deprecated-link';
import { MainHeading } from '../../../../../../../../../../common/components/support/headings/main-heading';

const UsersAuthCredentials = () => {
  useStyles(styles);

  const { headingOne } = useTexts();
  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.CURRENT_PASSWORD,
    validator: passwordValidator,
  };

  return (
    <div id="visitor-users-auth-email">
      <MainHeading icon="signIn" />
      <form>
        <EmailAddressInput />
        <PasswordInput {...passwordInputProps} />
        <CredentialsError />
        <SignInButton />
      </form>
      <DeprecatedLink linkKey="user/password-reset" />
    </div>
  );
};

export default UsersAuthCredentials;
