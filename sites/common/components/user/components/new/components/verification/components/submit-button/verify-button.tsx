import { useCallback } from 'react';
import { SubmitButton } from '../../../../../../../support/submit-button/submit-button';
import {
  SetControl,
  SetErrors,
} from '../../../../../../../../../../lib/types/setters';
import { verify } from '../../functions/verify';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';
import { useRouter } from 'next/navigation';

interface VerifyButtonProps {
  lang: string;
  apiUrl: string;
  label: string;
  verificationCode: string;
  connecting: boolean;
  setControl: SetControl;
  setErrors: SetErrors;
  styles: Styles;
}

export const VerifyButton = (props: VerifyButtonProps) => {
  const {
    lang,
    apiUrl,
    label,
    verificationCode,
    connecting,
    setControl,
    setErrors,
    styles,
  } = props;

  const router = useRouter();

  const submit = useCallback(
    () =>
      verify({
        lang,
        apiUrl,
        verificationCode,
        router,
        setControl,
        setErrors,
      }),
    [verificationCode],
  );

  return (
    <SubmitButton
      label={label}
      connecting={connecting}
      submit={submit}
      setControl={setControl}
      styles={styles}
    />
  );
};
