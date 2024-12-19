import React from 'react';
import { DeprecatedLink } from '../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const TermsOfServiceLink = () => {
  const linkProps = {
    linkKey: 'visitor/terms-of-service',
    customClassNames: 'link',
  };

  return <DeprecatedLink {...linkProps} />;
};
