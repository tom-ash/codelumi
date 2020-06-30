import { deauthorizeUser } from '../../authorize/functions/adapters'
import { routes } from '../../../../../../shared/routes/routes'

const origin = `${CLIENT_URL}/`

export function addAnnouncementManager() {
  const {
    pl,
    en,
  } = routes.showAnnouncementCreate

  return {
    id: 'user-show-account-add-announcemt',
    classNames: { container: 'button'},
    href: this.languageObjectHandler({ pl: `${CLIENT_URL}${pl.url}`, en: `${CLIENT_URL}${en.url}` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: pl.title, en: en.title }),
    label: this.labelProvider('fas fa-plus', pl.label, en.label),
    onClick: () => this.changePath({ showAnnouncementCreate: true })
  }
}

export function listAnnouncementsManager() {
  const { changeAnnouncementIndexData, changeAnnouncementIndexControl } = this.props
  return {
    id: 'user-show-account-list-announcements',
    classNames: { container: 'button'},
    href: this.languageObjectHandler({ pl: `${origin}dodane-ogloszenia'`, en: `${origin}added-announcements'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    label: this.labelProvider('fas fa-list-ul', 'Dodane ogłoszenia', 'Added announcements'),
    onClick: () => {
      changeAnnouncementIndexData({ announcements: null, amount: null })
      this.changePath({ showAnnouncementIndexList: true })
      changeAnnouncementIndexControl({ fetch: true })
    }
  }
}

export function accountManager() {
  return {
    id: 'user-show-account-account',
    classNames: { container: 'button'},
    href: this.languageObjectHandler({ pl: `${origin}account-settings'`, en: `${origin}ustawienia-konta'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    label: this.labelProvider('fas fa-cog', 'Ustawienia', 'Settings'),
    onClick: () => this.changePath({ showUserEditAccount: true })
  }
}

export function deAuthorizeManager() {
  return {
    id: 'user-show-account-de-authorize',
    classNames: { container: 'button sign-out'},
    label: this.labelProvider('fas fa-sign-out-alt', 'Wyloguj', 'Sign Out'),
    onClick: () => deauthorizeUser.call(this)
  }
}
