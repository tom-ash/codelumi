import React from 'react';

interface ExternalLinkInterface {
  (props: {
    href: string;
    lang: Lang;
    label: React.ReactElement | string;
    title: string;
    classNames?: string[];
    retainTab?: boolean;
  }): React.ReactElement | null;
}

export const ExternalLink: ExternalLinkInterface = (props) => {
  const {
    href,
    lang,
    label,
    title,
    classNames: customClassNames,
    retainTab = false,
  } = props;

  const classNames = ['link'];

  if (customClassNames) {
    // https://stackoverflow.com/a/45949156
    classNames.push.apply(classNames, customClassNames);
  }

  const className = classNames.join(' ');
  const target = retainTab ? undefined : '_blank';

  return (
    <a
      href={href}
      hrefLang={lang}
      title={title}
      className={className}
      target={target}
    >
      {label}
    </a>
  );
};
