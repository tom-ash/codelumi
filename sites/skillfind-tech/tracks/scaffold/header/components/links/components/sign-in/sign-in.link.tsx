import React from 'react';
import { DeprecatedLink } from '../../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const SignInLink = () => {
  const linkProps = {
    linkKey: 'user/auth',
    customClassNames: 'link',
  };

  return <DeprecatedLink {...linkProps} />;
};
