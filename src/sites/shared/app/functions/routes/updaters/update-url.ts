import { changeUrl } from '../changers/change-url'

interface UpdateUrl {
  (attrs: {
    href: string;
    withScroll?: boolean;
    retainQueryParams?: boolean;
  }): void
}


export const updateUrl: UpdateUrl = (attrs) => {
  const { href, withScroll, retainQueryParams } = attrs
  // @ts-ignore
  window.onlyUpdate = true

  changeUrl({ href, withScroll, retainQueryParams })
}
