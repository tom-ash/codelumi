import React from 'react';
import { DeprecatedLink } from '../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const AboutSkillfindTechLink = () => {
  const linkProps = {
    linkKey: 'visitor/about-skillfind-tech',
    customClassNames: 'link',
  };

  return <DeprecatedLink {...linkProps} />;
};
