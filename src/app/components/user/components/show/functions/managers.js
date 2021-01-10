import {
  ANNOUNCEMENT_CREATE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK,
  USER_EDIT_TRACK
} from '../../../../../../shared/constants/tracks/tracks'
import {
  ANNOUNCEMENT_CREATE_URLS,
  ANNOUNCEMENT_INDEX_MY_URLS,
  USER_EDIT_URLS
} from '../../../../../../shared/constants/routes/urls'
import {
  ANNOUNCEMENT_CREATE_TITLES,
  ANNOUNCEMENT_INDEX_MY_TITLES,
  USER_EDIT_TITLES
} from '../../../../../../shared/constants/routes/titles'
import {
  ANNOUNCEMENT_CREATE_LABELS
} from '../../../../../../shared/constants/routes/labels'
import { deauthorizeUser } from '../../authorize/functions/adapters'
import { SIGN_OUT_LABEL } from '../constants/labels'

export function addAnnouncementManager({ hrefLang }) {
  return {
    href: `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_CREATE_URLS)}`,
    hrefLang,
    title: this.langHandler(ANNOUNCEMENT_CREATE_TITLES),
    label: this.langHandler(ANNOUNCEMENT_CREATE_LABELS),
    onClick: () => this.changeRoute(ANNOUNCEMENT_CREATE_TRACK)
  }
}

export function myAnnouncementsManager({ hrefLang }) {
  const {
    changeAnnouncementIndexData,
    changeAnnouncementIndexControl
  } = this.props
  const title = this.langHandler(ANNOUNCEMENT_INDEX_MY_TITLES)

  return {
    href: `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_INDEX_MY_URLS)}`,
    hrefLang,
    title,
    label: title,
    onClick: () => {
      changeAnnouncementIndexData({
        announcements: null,
        amount: null
      })
      changeAnnouncementIndexControl({ fetch: true })
      this.changeRoute(ANNOUNCEMENT_INDEX_MY_TRACK)
    }
  }
}

export function accountManager({ hrefLang }) {
  const title = this.langHandler(USER_EDIT_TITLES)

  return {
    href: this.langHandler(USER_EDIT_URLS),
    hrefLang,
    title,
    label: title,
    onClick: () => this.changeRoute(USER_EDIT_TRACK)
  }
}

export function deAuthorizeManager() {
  return {
    label: this.langHandler(SIGN_OUT_LABEL),
    onClick: () => deauthorizeUser.call(this)
  }
}
