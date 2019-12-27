import { deauthorizeUser } from '../../authorize/functions/adapters'

export function addAnnouncementManager() {
  return {
    id: 'user-show-account-add-announcemt',
    classNames: { container: 'button'},
    label: this.labelProvider('fas fa-plus', 'Dodaj ogłoszenie', 'Add free announcement'),
    onClick: () => this.changeRoute({ showAnnouncementCreate: true })
  }
}

export function listAnnouncementsManager() {
  const { changeAnnouncementIndexData, changeAnnouncementIndexControl } = this.props
  return {
    id: 'user-show-account-list-announcements',
    classNames: { container: 'button'},
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
