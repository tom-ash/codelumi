import { LinkData } from '../../../../../lib/types/link-data';
import NextLink from 'next/link';

interface LinkProps {
  data: LinkData;
  className?: string;
}

export const Link = (props: LinkProps) => {
  const {
    data: { href, hrefLang, label, title },
    className,
  } = props;

  return (
    <NextLink
      href={href}
      hrefLang={hrefLang}
      title={title}
      className={className}
      // target='_blank'
    >
      {label}
    </NextLink>
  );
};

//   lang: Lang;
//   retainTab?: boolean;
//   retainQuery?: boolean;
//   external?: boolean;

// href,
// lang,
// label,
// title,
// classNames: customClassNames,
// retainTab = false,
// retainQuery = false,
// external = false,
// children,

// const classNames = ['link'];

// if (customClassNames) {
//   // https://stackoverflow.com/a/45949156
//   classNames.push.apply(classNames, customClassNames);
// }

// const className = classNames.join(' ');

// const onClick = useCallback(
//   (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     if (!external) {
//       e.preventDefault();

//       changeUrl({ href, retainQueryParams: retainQuery });
//     }
//   },
//   [external],
// );

// const target = retainTab ? undefined : '_blank';
