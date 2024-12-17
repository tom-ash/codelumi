interface BuildAlternateLangLinkElements {
  (
    alternateLinks:
      | {
          href: string;
          hrefLang: Lang;
        }[]
      | null,
  ): string;
}

export const buildAlternateLangLinkElements: BuildAlternateLangLinkElements = (
  alternateLinks,
) => {
  const elements: string[] = [];

  if (!alternateLinks) {
    return '';
  }

  alternateLinks.map((alternateLangLink) => {
    const { href, hrefLang } = alternateLangLink;

    elements.push(
      `<link rel="alternate" hreflang="${hrefLang}" href="${href}" />`,
    );
  });

  return elements.join('');
};
