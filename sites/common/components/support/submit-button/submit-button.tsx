import ManagedButton from '../../managed-inputs/button/button';
import { SetControl } from '../../../../../lib/types/setters';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';
import { RotatingLines } from 'react-loader-spinner';

interface SubmitButtonProps {
  label: string;
  connecting: boolean;
  setControl: SetControl;
  submit(): void;
  styles: Styles;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { label: textLabel, connecting, setControl, submit, styles } = props;

  const disabled = connecting;

  const classNames = {
    container: styles.container,
    input: styles.input,
  };

  const label = connecting ? (
    <RotatingLines width="20px" strokeColor="white" />
  ) : (
    textLabel
  );

  const onClick = () => {
    setControl({ connecting: true });

    submit();
  };

  return (
    <ManagedButton
      disabled={disabled}
      label={label}
      onClick={onClick}
      classNames={classNames}
    />
  );
};
