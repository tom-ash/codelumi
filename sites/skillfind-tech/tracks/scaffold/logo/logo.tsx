import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import Icon from '../icon/icon';

interface LogoInterface {
  (props: {
    scale?: number;
    style?: React.CSSProperties;
    iconColor?: string;
  }): JSX.Element;
}

export const Logo: LogoInterface = (props) => {
  useStyles(styles);

  const { style, iconColor } = props;

  return (
    <div className="logo" style={style}>
      <span className="skillfind">skillfind</span>
      <Icon scale={0.04} color={iconColor} />
      <span className="tech">tech</span>
    </div>
  );
};

export default Logo;
