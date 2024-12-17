import React from 'react';
import CommonPasswordReset from '../../../../../../common/components/user/components/password-reset/password-reset';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useApp } from '../../../../../src copy/sites/shared/app/functions/store/use-app';

const PasswordReset = () => {
  useStyles(styles);

  return (
    <div id="user-password-reset">
      <CommonPasswordReset />
    </div>
  );
};

export default PasswordReset;
