import React from 'react';
import { DeprecatedLink } from '../../../../../../../../../../common/components/support/deprecated-link/deprecated-link';

import Image from '../../../../../../../../../../common/components/support/image/image';

interface ArticleTileInterface {
  (props: {
    image: string;
    title: string;
    href: string;
    hrefLang: Lang;
  }): React.ReactElement;
}

export const ArticleTile: ArticleTileInterface = (props) => {
  const { image, title, href, hrefLang } = props;

  const label = (
    <>
      <div className="cover">
        <Image src={image} alt={title} />
      </div>
      <div className="title">{title}</div>
    </>
  );

  const linkProps = {
    label,
    href,
    hrefLang,
    customClassNames: 'article',
  };

  return <DeprecatedLink {...linkProps} />;
};
