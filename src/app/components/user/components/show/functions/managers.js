import { deauthorizeUser } from '../../authorize/functions/adapters'

const origin = `${CLIENT_URL}/`

export function addAnnouncementManager() {
  return {
    id: 'user-show-account-add-announcemt',
    classNames: { container: 'button'},
    href: this.languageObjectHandler({ pl: `${origin}dodaj-ogloszenie'`, en: `${origin}add-announcement'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    label: this.labelProvider('fas fa-plus', 'Dodaj ogłoszenie', 'Add free announcement'),
    onClick: () => this.changeRoute({ showAnnouncementCreate: true })
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
      this.changeRoute({ showAnnouncementIndexUser: true })
      changeAnnouncementIndexControl({ fetch: true })
    }
  }
}

export function accountManager() {
  return {
    id: 'user-show-account-account',
    classNames: { container: 'button'},
    href: this.languageObjectHandler({ pl: `${origin}account_settings'`, en: `${origin}ustawienia_konta'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    label: this.labelProvider('fas fa-cog', 'Ustawienia', 'Settings'),
    onClick: () => this.changeRoute({ showUserEditAccount: true })
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
