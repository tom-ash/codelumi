import buildUrl from "../../../../../../../../../shared/functions/builders/url"

export function linkManager() {
  const { path, title } = this.props
  const { changeRoute } = this.context
  const href = buildUrl({ path })

  return {
    classNames: { container: 'link' },
    label: this.langHandler({ pl: 'Zobacz szczegóły', en: 'See details'}),
    href,
    hrefLang: this.langHandler({ pl: 'pl', en: 'en' }),
    title,
    onClick: () => changeRoute({ href })
  }
}
