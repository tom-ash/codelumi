import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { DeprecatedLink } from '../../../../../../../../../common/components/support/deprecated-link/deprecated-link';
import Logo from '../../../../../logo/logo';

interface LogoInterface {
  (): JSX.Element;
}

export const LogoLink: LogoInterface = () => {
  useStyles(styles);

  const label = <Logo />;

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo-link',
  };

  return <DeprecatedLink {...linkProps} />;
};

export default LogoLink;
