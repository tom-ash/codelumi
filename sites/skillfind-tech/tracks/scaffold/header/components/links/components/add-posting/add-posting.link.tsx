import React from 'react';
import { DeprecatedLink } from '../../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const AddPostingLink = () => {
  const linkProps = {
    linkKey: 'listings/new/form',
    customClassNames: 'add-posting',
  };

  return <DeprecatedLink {...linkProps} />;
};
