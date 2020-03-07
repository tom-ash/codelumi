export const routes = {
  showAnnouncementIndexMap: {
    sender: 'map',
    pl: {
      regEx: /(^$)/,
      url: '/',
      title: 'Mapa ogłoszeń wynajmu nieruchomości w Warszawie'
    },
    en: {
      regEx: /(^$)/,
      url: '/',
      title: 'Map of Warsaw Real Estate Lease Announcements'
    },
    overshadow: false
  },
  showAnnouncementIndexList: {
    sender: 'list',
    pl: {
      regEx: /(^lista$)/,
      url: '/lista',
      title: 'Lista ogłoszeń wynajmu nieruchomości w Warszawie'
    },
    en: {
      regEx: /(^list$)/,
      url: '/list',
      title: 'List of Warsaw Real Estate Lease Announcements'
    },
    overshadow: true
  },
  showAnnouncementShow: {
    sender: 'announcement',
    pl: {
      regEx: /(^\d+$)/
    },
    en: {
      regEx: /(^\d+$)/
    },
    overshadow: false
  },  
  showAnnouncementCreate: {
    sender: 'generic',
    pl: {
      regEx: /^dodaj-ogloszenie$/,
      url: '/dodaj-ogloszenie',
      title: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości w Warszawie'
    },
    en: {
      regEx: /^add-announcement$/,
      url: '/add-announcement',
      title: 'Add Free Announcement of Real Estate Lease in Warsaw'
    },
    overshadow: false
  },
  showUserCreate: {
    sender: 'generic',
    pl: {
      regEx: /^zarejestruj$/,
      url: '/zarejestruj',
      title: 'Zarejestruj'
    },
    en: {
      regEx: /^sign-up$/,
      url: '/sign-up',
      title: 'Sign Up'
    },
    needsBackground: true,
    overshadow: true
  },
  showUserAuthorize: {
    sender: 'generic',
    pl: {
      regEx: /^zaloguj$/,
      url: '/zaloguj',
      title: 'Zaloguj'
    },
    en: {
      regEx: /^sign-in$/,
      url: '/sign-in',
      title: 'Sign In'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorAbout: {
    sender: 'generic',
    pl: {
      regEx: /^o-serwisie$/,
      url: '/o-serwisie',
      title: 'O Serwisie'
    },
    en: {
      regEx: /^about$/,
      url: '/about',
      title: 'About'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorContact: {
    sender: 'generic',
    pl: {
      regEx: /^kontakt$/,
      url: '/kontakt',
      title: 'Kontakt'
    },
    en: {
      regEx: /^contact$/,
      url: '/contact',
      title: 'Contact'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorTermsOfService: {
    sender: 'generic',
    pl: {
      regEx: /^regulamin$/,
      url: '/regulamin',
      title: 'Regulamin'
    },
    en: {
      regEx: /^terms-of-service$/,
      url: '/terms-of-service',
      title: 'Terms of Service'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorCookiesPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-plikow-cookies$/,
      url: '/polityka-plikow-cookies',
      title: 'Polityka Plików Cookies'
    },
    en: {
      regEx: /^cookies-policy$/,
      url: '/cookies-policy',
      title: 'Cookies Policy'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorPrivacyPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-prywatnosci$/,
      url: '/polityka-prywatnosci',
      title: 'Polityka Prywatności'
    },
    en: {
      regEx: /^privacy-policy$/,
      url: '/privacy-policy',
      title: 'Privacy Policy'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorPrivacySettings: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-prywatnosci$/,
      url: '/ustawienia-prywatnosci',
      title: 'Ustawienia Prywatności'
    },
    en: {
      regEx: /^privacy-settings$/,
      url: '/privacy-settings',
      title: 'Privacy Settings'
    },
    needsBackground: true,
    overshadow: true
  },
  showAnnouncementIndexAdded: {
    sender: 'generic',
    pl: {
      regEx: /^dodane-ogloszenia$/,
      url: '/dodane-ogloszenia',
      title: 'Dodane ogłoszenia'
    },
    en: {
      regEx: /^added-announcements$/,
      url: '/added-announcements',
      title: 'Added Announcements'
    },
    needsBackground: false,
    overshadow: false
  },
  showAnnouncementEdit: {
    sender: 'generic',
    pl: {
      regEx: /^edytuj-ogloszenie\/\d+$/,
      url: '/edytuj-ogloszenie',
      title: 'Edytuj ogłoszenie'
    },
    en: {
      regEx: /^edit-announcement\/\d+$/,
      url: '/edit-announcement',
      title: 'Edit Announcement'
    },
    needsBackground: false,
    overshadow: false
  },
  showUserShow: {
    sender: 'generic',
    pl: {
      regEx: /^konto$/,
      url: '/konto',
      title: 'Konto'
    },
    en: {
      regEx: /^account$/,
      url: '/account',
      title: 'Account'
    },
    needsBackground: true,
    overshadow: true
  },

  showUserEditPasswordReset: {
    sender: 'generic',
    pl: {
      regEx: /^zresetuj-haslo$/,
      url: '/zresetuj-haslo',
      title: 'Zresetuj hasło'
    },
    en: {
      regEx: /^reset-password$/,
      url: '/reset-password',
      title: 'Reset Password'
    },
    needsBackground: true,
    overshadow: true
  },
  showUserEditPhoneVerify: {
    sender: 'generic',
    pl: {
      regEx: /^zweryfikuj-numer-telefonu$/,
      url: '/zweryfikuj-numer-telefonu',
      title: 'Zweryfikuj numer telefonu'
    },
    en: {
      regEx: /^verify-phone-number$/,
      url: '/verify-phone-number',
      title: 'Verify Phone Number'
    },
    needsBackground: true,
    overshadow: true
  },
  showUserEditAccount: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-konta$/,
      url: '/ustawienia-konta',
      title: 'Ustawienia konta'
    },
    en: {
      regEx: /^account-settings$/,
      url: '/account-settings',
      title: 'Account Settings'
    },
    needsBackground: false,
    overshadow: false
  }
}
