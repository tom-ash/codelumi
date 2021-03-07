import { buildLink } from '../../../../../../functions/build-link'

export function linkManager() {
  const { id } = this.props
  const { changeRoute } = this.context
  const href = buildLink(this.props)

  return {
    classNames: { container: 'link' },
    label: this.langHandler({ pl: 'Zobacz szczegóły', en: 'See details'}),
    href,
    hrefLang: this.langHandler({ pl: 'pl', en: 'en' }),
    title: this.langHandler({ pl: `Ogłoszenie ${id}`, en: `Announcement ${id}` }),
    onClick: () => changeRoute({ href })
  }
}