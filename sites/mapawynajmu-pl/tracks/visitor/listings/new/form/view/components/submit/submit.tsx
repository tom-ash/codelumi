import { SetControl } from '../../../../../../../../../../lib/types/setters';
import { SubmitButton } from '../../../../../../../../../common/components/support/submit-button/submit-button';
import styles from '../../../../../../../common/styles/inputs/button.module.css';

interface SubmitProps {
  label: string;
  connecting: boolean;
  setControl: SetControl;
  submit: () => void;
}

export const Submit = (props: SubmitProps) => {
  const { label, connecting, setControl, submit } = props;

  return (
    <SubmitButton
      label={label}
      connecting={connecting}
      setControl={setControl}
      submit={submit}
      styles={styles}
    />
  );
};
