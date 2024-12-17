import React from 'react';
import { DeprecatedLink } from '../../../../../support/deprecated-link/deprecated-link';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';

export const StorageUrl = () => {
  const { storageUrlLinkLabel } = useTexts();
  const { storageUrl } = useData();

  const linkProps = {
    label: storageUrl,
    href: storageUrl,
  };

  return (
    <div className="storage-url">
      <label>{storageUrlLinkLabel}</label>
      <DeprecatedLink {...linkProps} />
    </div>
  );
};
