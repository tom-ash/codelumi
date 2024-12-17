import React from 'react';
import { DeprecatedLink } from '../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const PrivacySettingsLink = () => {
  const linkProps = {
    linkKey: 'visitor/privacy-settings',
    customClassNames: 'link',
  };

  return <DeprecatedLink {...linkProps} />;
};
