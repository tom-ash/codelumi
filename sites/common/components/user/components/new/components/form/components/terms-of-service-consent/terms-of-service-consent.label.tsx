import React from 'react';
import { LinkData } from '../../../../../../../../../../lib/types/link-data';

interface TermsOfServiceConsentLabelProps {
  syntheticLabel: string;
  termsOfServiceLink: LinkData;
  termsOfService: string;
}

export const TermsOfServiceConsentLabel = (
  props: TermsOfServiceConsentLabelProps,
) => {
  const { syntheticLabel, termsOfService, termsOfServiceLink } = props;

  const label = syntheticLabel.split(/({.+?})/).map((element: string) => {
    if (element === '{termsOfService}') {
      const { href, hrefLang } = termsOfServiceLink;

      return (
        <a
          key="link"
          className="link"
          href={href}
          hrefLang={hrefLang}
          target="_blank"
          onMouseOver={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          {termsOfService}
        </a>
      );
    }

    return element;
  });

  return <>{label}</>;
};
