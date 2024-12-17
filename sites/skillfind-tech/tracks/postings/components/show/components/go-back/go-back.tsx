import React from 'react';
import { useLinks } from '../../../../../../../src copy/sites/shared/app/functions/store/use-links';
import { DeprecatedLink } from '../../../../../../../../common/components/support/deprecated-link/deprecated-link';
import { SVG } from '../../../../../../../../common/components/support/svg/svg';

interface GoBackInterface {
  (props: {}): React.ReactElement;
}

export const GoBack: GoBackInterface = () => {
  const {
    root: { href, hrefLang, title },
  } = useLinks();

  const label = <SVG name="close" />;

  return (
    <DeprecatedLink
      href={href}
      hrefLang={hrefLang}
      title={title}
      label={label}
      customClassNames="go-back"
      retainQueryParams={true}
    />
  );
};
