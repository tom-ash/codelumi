import React from 'react';
import { DeprecatedLink } from '../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const ListingNewLink = () => {
  const linkProps = {
    linkKey: 'listings/new/form',
    customClassNames: 'header-link add-announcement',
  };

  return <DeprecatedLink {...linkProps} />;
};
