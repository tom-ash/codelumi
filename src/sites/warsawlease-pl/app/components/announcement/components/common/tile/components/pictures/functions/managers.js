export function linkManager() {
  const { url, title } = this.props
  const { changeRoute } = this.context
  const href = url

  return {
    classNames: { container: 'link' },
    label: this.langHandler({ pl: 'Zobacz szczegóły', en: 'See details'}),
    href,
    hrefLang: this.langHandler({ pl: 'pl', en: 'en' }),
    title,
    onClick: () => changeRoute({ href })
  }
}
