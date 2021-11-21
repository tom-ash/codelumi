import { deauthorizeUser } from '../../authorize/functions/adapters'
import { SIGN_OUT_LABEL } from '../constants/labels'

export function addAnnouncementManager(props) {
  const { links, lang } = props
  const { changeRoute } = this.context
  const link = links['announcement/create']
  const href = link && link.url
  const hrefLang = lang
  const title = this.langHandler({ pl: 'Dodaj bezpłatne ogłoszenie', en: 'Add Free Announcement' })

  return {
    classNames: { container: 'add-announcement' },
    href,
    hrefLang,
    title,
    label: title,
    onClick: () => changeRoute({ href })
  }
}

export function myAnnouncementsManager(props) {
  const { links, lang } = props
  const { changeRoute } = this.context
  const link = links['announcement/index/user']
  const href = link && link.url
  const hrefLang = lang
  const title = link && link.title
  const label = title

  return {
    classNames: { container: 'add-announcement' },
    href,
    hrefLang,
    title,
    label,
    onClick: () => changeRoute({ href })
  }
}

export function accountManager(props) {
  const { links, lang } = props
  const { changeRoute } = this.context
  const link = links['user/edit']
  const href = link && link.url
  const hrefLang = lang
  const title = link && link.title
  const label = title

  return {
    classNames: { container: 'add-announcement' },
    href,
    hrefLang,
    title,
    label,
    onClick: () => changeRoute({ href })
  }
}

export function deAuthorizeManager() {
  return {
    classNames: { container: 'de-authorize' },
    label: this.langHandler(SIGN_OUT_LABEL),
    onClick: () => deauthorizeUser.call(this)
  }
}
