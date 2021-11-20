import { ANNOUNCEMENT_CREATE_FORM_URLS, ANNOUNCEMENT_INDEX_MY_URLS, USER_EDIT_URLS } from '../../../../../../shared/constants/routes/urls'
import { deauthorizeUser } from '../../authorize/functions/adapters'
import { SIGN_OUT_LABEL } from '../constants/labels'
import CLIENT_URL from '../../../../../../shared/constants/urls/client.js'

export function addAnnouncementManager({ hrefLang }) {
  const { changeRoute } = this.context
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_CREATE_FORM_URLS)}`
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

export function myAnnouncementsManager({ hrefLang }) {
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_INDEX_MY_URLS)}`
  const title = '' // TODO
  const { changeRoute } = this.context

  return {
    classNames: { container: 'my-announcements' },
    href,
    hrefLang,
    title,
    label: title,
    onClick: () => changeRoute({ href })
  }
}

export function accountManager({ hrefLang }) {
  const href = `${CLIENT_URL}/${this.langHandler(USER_EDIT_URLS)}`
  const title = '' // TODO
  const { changeRoute } = this.context

  return {
    classNames: { container: 'settings' },
    href,
    hrefLang,
    title,
    label: title,
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
