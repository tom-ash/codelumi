import React from 'react';
import { DeprecatedLink } from '../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const UserListingIndexLink = () => {
  const linkProps = {
    linkKey: 'announcement/index/user',
    customClassNames: 'header-link',
  };

  return <DeprecatedLink {...linkProps} />;
};
