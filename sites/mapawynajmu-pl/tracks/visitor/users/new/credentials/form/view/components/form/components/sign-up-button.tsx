import { SetControl } from '../../../../../../../../../../../../lib/types/setters';
import { SubmitButton } from '../../../../../../../../../../../common/components/support/submit-button/submit-button';
import { Styles } from '../../../../../../../../../../types/styles';

interface SignUpButtonProps {
  connecting: boolean;
  label: string;
  submit(): void;
  setControl: SetControl;
  styles: Styles;
}

export const SignUpButton = (props: SignUpButtonProps) => {
  const { connecting, label, submit, setControl, styles } = props;

  return (
    <SubmitButton
      connecting={connecting}
      label={label}
      submit={submit}
      setControl={setControl}
      styles={styles}
    />
  );
};
