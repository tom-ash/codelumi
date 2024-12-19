import React from 'react';
import { FloatClear } from '../../../../../../../../common/components/support/float-clear/float-clear';

// TODO: Add Image to support components.
import Image from '../../../../../../../../common/components/support/render-node/components/image/image';
import { DeprecatedLink } from '../../../../../../../../common/components/support/deprecated-link/deprecated-link';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';

const VisitorPageIndex = () => {
  useStyles(styles);

  const { pages } = useData();

  return (
    <div id="visitor-page-index">
      {/* @ts-ignore */}
      {pages.map((page) => {
        const { coverImage: image, title, url, lang } = page;

        const imageProps = {
          src: image,
          alt: title,
        };

        const label = (
          <>
            <Image {...imageProps} />
            <h2>{title}</h2>
          </>
        );

        const linkProps = {
          label,
          href: url,
          hrefLang: lang,
        };

        return <DeprecatedLink {...linkProps} />;
      })}
      <FloatClear />
    </div>
  );
};

export default VisitorPageIndex;
