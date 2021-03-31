import { ANNOUNCEMENT_CREATE_FORM_URLS, ANNOUNCEMENT_INDEX_MY_URLS, USER_EDIT_URLS } from '../../../../../../shared/constants/routes/urls'
import { ANNOUNCEMENT_CREATE_TITLES, ANNOUNCEMENT_INDEX_MY_TITLES, USER_EDIT_TITLES } from '../../../../../../shared/constants/routes/titles'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../shared/constants/routes/labels'
import { deauthorizeUser } from '../../authorize/functions/adapters'
import { SIGN_OUT_LABEL } from '../constants/labels'
import CLIENT_URL from '../../../../../../shared/constants/urls/client.js'

export function addAnnouncementManager({ hrefLang }) {
  const { changeRoute } = this.context
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_CREATE_FORM_URLS)}`

  return {
    href,
    hrefLang,
    title: this.langHandler(ANNOUNCEMENT_CREATE_TITLES),
    label: this.langHandler(ANNOUNCEMENT_CREATE_LABELS),
    onClick: () => changeRoute({ href })
  }
}

export function myAnnouncementsManager({ hrefLang }) {
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_INDEX_MY_URLS)}`
  const title = this.langHandler(ANNOUNCEMENT_INDEX_MY_TITLES)
  const { changeRoute } = this.context

  return {
    href,
    hrefLang,
    title,
    label: title,
    onClick: () => changeRoute({ href })
  }
}

export function accountManager({ hrefLang }) {
  const href = `${CLIENT_URL}/${this.langHandler(USER_EDIT_URLS)}`
  const title = this.langHandler(USER_EDIT_TITLES)
  const { changeRoute } = this.context

  return {
    href,
    hrefLang,
    title,
    label: title,
    onClick: () => changeRoute({ href })
  }
}

export function deAuthorizeManager() {
  return {
    label: this.langHandler(SIGN_OUT_LABEL),
    onClick: () => deauthorizeUser.call(this)
  }
}
