import React from 'react';
import { DeprecatedLink } from '../../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const SettingsLink = () => {
  const linkProps = {
    linkKey: 'user/users/edit',
    customClassNames: 'settings',
  };

  return <DeprecatedLink {...linkProps} />;
};
