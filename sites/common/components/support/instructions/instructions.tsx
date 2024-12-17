import { Styles } from '../../../../mapawynajmu-pl/types/styles';

type InstructionsProps = {
  value: string;
  isError: boolean;
  styles: Styles;
};

export const Instructions = (props: InstructionsProps) => {
  const { value, isError, styles } = props;

  const classNames = [styles.instructions];
  if (isError) {
    classNames.push(styles.error);
  }

  return <div className={classNames.join(' ')}>{value}</div>;
};
