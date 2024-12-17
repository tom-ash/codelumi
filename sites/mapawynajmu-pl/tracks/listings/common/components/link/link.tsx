import React from 'react';
import { ManagedLink } from 'managed-inputs';
import { changeUrl } from '../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import { useLinks } from '../../../../../src copy/sites/shared/app/functions/store/use-links';

interface LinkProps {
  track: string;
}

export const Link = (props: LinkProps) => {
  const links = useLinks();

  const { track } = props;
  const link = links[track];

  if (!link) return <></>;

  if (typeof window !== 'undefined') {
    // TODO: Investigate better solution.
    // @ts-ignore
    window.areListingsObsolete = true;
  }

  const classNames = { container: 'link' };
  const { href, hrefLang, title, label } = link;
  const onClick = () => changeUrl({ href });
  const linkProps = { classNames, href, hrefLang, title, label, onClick };

  return <ManagedLink {...linkProps} />;
};
