import { PASSWORD_REGEX } from '../../constants/password-regex';

interface PasswordValidator {
  (props: {
    password: string;
    setErrors(args: { password: boolean }): void;
  }): boolean;
}

export const passwordValidator: PasswordValidator = (props) => {
  const { password, setErrors } = props;

  if (!PASSWORD_REGEX.test(password)) {
    setErrors({ password: true });
    return false;
  }

  return true;
};
