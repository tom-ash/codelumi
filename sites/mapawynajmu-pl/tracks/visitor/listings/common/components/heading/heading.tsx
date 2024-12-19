import React from 'react';
import { categories } from '../../constants/categories';
import { LocalityAndSublocality } from './components/locality-and-sublocality';
import { Lang } from '../../../../../common/types/lang';
import { Styles } from '../../../../../../types/styles';

export function parseCategory({
  categoryNumber,
  lang,
}: {
  categoryNumber: number;
  lang: Lang;
}) {
  return categories.find((category) => category.number === categoryNumber)!
    .label[lang];
}

interface HeadingProps {
  tier: number;
  name?: string;
  category: number;
  lang: Lang;
  locality: string;
  sublocality?: string;
  styles: Styles;
}

export const Heading = (props: HeadingProps) => {
  const { tier, name, category, locality, sublocality, lang, styles } = props;

  console.log('props', props)

  return React.createElement(
    `h${tier}`,
    {
      className: styles.heading,
    },
    <>
      {name && <div className={styles.name}>{name}</div>}
      <div className={styles.category}>
        <span>
          {category !== null &&
            parseCategory({ categoryNumber: category, lang })}
        </span>
        &nbsp;
        {/* TODO: LANG! */}
        <span className={styles.forLease}>na wynajem</span>
      </div>
      <div className={styles.localityAndSublocality}>
        <LocalityAndSublocality locality={locality} sublocality={sublocality} />
      </div>
    </>,
  );
};

export default Heading;
