import { deauthorizeUser } from '../../../../authorize/functions/adapters'

export function addAnnouncementManager(action) {
  return {
    id: 'user-show-account-add-announcemt',
    styles: { button: 'button' },
    label: this.labelProvider('fas fa-plus', 'Dodaj ogłoszenie', 'Add announcement'),
    onClick: () => this.changeRoute(null, 'addAnnouncement')
  }
}

export function listAnnouncementsManager(action) {
  return {
    id: 'user-show-account-list-announcements',
    styles: { button: 'button' },
    label: this.labelProvider('fas fa-list-ul', 'Dodane ogłoszenia', 'Added announcements'),
    onClick: () => {
      this.props.changeAnnouncementControl({ type: 'list' })
      this.changeRoute(null, 'myAnnouncements')
    }
  }
}

export function accountManager(action) {
  return {
    id: 'user-show-account-account',
    styles: { button: 'button' },
    label: this.labelProvider('fas fa-cog', 'Ustawienia', 'Settings'),
    onClick: () => this.changeRoute(null, 'myAccountSettings')
  }
}

export function deAuthorizeManager(action) {
  return {
    id: 'user-show-account-de-authorize',
    styles: { button: 'button' },
    label: this.labelProvider('fas fa-sign-out-alt', 'Wyloguj', 'Sign Out'),
    onClick: () => deauthorizeUser.call(this)
  }
}
