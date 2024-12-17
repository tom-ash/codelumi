import { Styles } from '../../../../mapawynajmu-pl/types/styles';

interface MainHeadingProps {
  value: string;
  styles: Styles;
}

export const MainHeading = (props: MainHeadingProps) => {
  const { value, styles } = props;

  return <h1 className={styles.mainHeading}>{value}</h1>;
};
