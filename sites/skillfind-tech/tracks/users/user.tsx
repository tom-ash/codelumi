import React from 'react';
import loadable from '@loadable/component';
const UserNew = loadable(() => import('./components/new/new'));
const UserAuth = loadable(() => import('./components/auth/auth'));
const PasswordReset = loadable(
  () => import('./components/password-reset/password-reset'),
);
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useRender } from '../../../src copy/sites/shared/app/functions/store/use-render';

const User = () => {
  useStyles(styles);

  const render = useRender();
  const {
    'user/new': renderNew,
    'user/auth': renderAuth,
    'user/password-reset': renderPasswordReset,
  } = render;

  return (
    <div id="user">
      {renderNew && <UserNew />}
      {renderAuth && <UserAuth />}
      {renderPasswordReset && <PasswordReset />}
    </div>
  );
};

export default User;
