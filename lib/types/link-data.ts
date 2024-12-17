export interface LinkData {
  href: string;
  hrefLang: string;
  label: string | React.ReactElement;
  title: string;
  icon?: string;
}

export interface LinksData {
  [key: string]: LinkData;
}
