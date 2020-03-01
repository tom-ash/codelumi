export const routes = {
  showAnnouncementIndexMap: {
    sender: 'generic',
    pl: {
      regEx: /(^$)/,
      url: '/',
      title: 'Mapa wynajmu warszawskich nieruchomości | warsawlease.pl'
    },
    en: {
      regEx: /(^$)/,
      url: '/',
      title: 'Map of Warsaw property lease | warsawlease.pl'
    },
  },
  showAnnouncementIndexList: {
    sender: 'list',
    pl: {
      regEx: /(^lista$)/,
      url: '/lista',
      title: 'Lista ogłoszeń wynajmu warszawskich nieruchomości | warsawlease.pl'
    },
    en: {
      regEx: /(^list$)/,
      url: '/list',
      title: 'List of Annoucements of Warsaw Property Lease | warsawlease.pl'
    },
  },
  showAnnouncementShow: {
    sender: 'announcement',
    pl: {
      regEx: /(^\d+$)/
    },
    en: {
      regEx: /(^\d+$)/
    },
  },  
  showAnnouncementCreate: {
    sender: 'generic',
    pl: {
      regEx: /^dodaj-ogloszenie$/,
      url: '/dodaj-ogloszenie',
      title: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości w Warszawie | warsawlease.pl'
    },
    en: {
      regEx: /^add-announcement$/,
      url: '/add-announcement',
      title: 'Add Free Announcement of Real Estate Lease in Warsaw | warsawlease.pl'
    }
  },
  showUserCreate: {
    sender: 'generic',
    pl: {
      regEx: /^zarejestruj$/,
      url: '/zarejestruj',
      title: 'Zarejestruj | warsawlease.pl'
    },
    en: {
      regEx: /^sign-up$/,
      url: '/sign-up',
      title: 'Sign Up | warsawlease.pl'
    },
    needsBackground: true
  },
  showUserAuthorize: {
    sender: 'generic',
    pl: {
      regEx: /^zaloguj$/,
      url: '/zaloguj',
      title: 'Zaloguj | warsawlease.pl'
    },
    en: {
      regEx: /^sign-in$/,
      url: '/sign-in',
      title: 'Sign In | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorAbout: {
    sender: 'generic',
    pl: {
      regEx: /^o-serwisie$/,
      url: '/o-serwisie',
      title: 'O Serwisie | warsawlease.pl'
    },
    en: {
      regEx: /^about$/,
      url: '/about',
      title: 'About | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorContact: {
    sender: 'generic',
    pl: {
      regEx: /^kontakt$/,
      url: '/kontakt',
      title: 'Kontakt | warsawlease.pl'
    },
    en: {
      regEx: /^contact$/,
      url: '/contact',
      title: 'Contact | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorTermsOfService: {
    sender: 'generic',
    pl: {
      regEx: /^regulamin$/,
      url: '/regulamin',
      title: 'Kontakt | warsawlease.pl'
    },
    en: {
      regEx: /^terms-of-service$/,
      url: '/terms-of-service',
      title: 'Terms of Service | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorCookiesPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-plikow-cookies$/,
      url: '/polityka-plikow-cookies',
      title: 'Polityka Plików Cookies | warsawlease.pl'
    },
    en: {
      regEx: /^cookies-policy$/,
      url: '/cookies-policy',
      title: 'Cookies Policy | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorPrivacyPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-prywatnosci$/,
      url: '/polityka-prywatnosci',
      title: 'Polityka Prywatności | warsawlease.pl'
    },
    en: {
      regEx: /^privacy-policy$/,
      url: '/privacy-policy',
      title: 'Privacy Policy | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorPrivacySettings: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-prywatnosci$/,
      url: '/ustawienia-prywatnosci',
      title: 'Ustawienia Prywatności | warsawlease.pl'
    },
    en: {
      regEx: /^privacy-settings$/,
      url: '/privacy-settings',
      title: 'Privacy Settings | warsawlease.pl'
    },
    needsBackground: true
  },
  showAnnouncementIndexAdded: {
    sender: 'generic',
    pl: {
      regEx: /^dodane-ogloszenia$/,
      url: '/dodane-ogloszenia',
      title: 'Dodane ogłoszenia | warsawlease.pl'
    },
    en: {
      regEx: /^added-announcements$/,
      url: '/added-announcements',
      title: 'Added Announcements | warsawlease.pl'
    },
    needsBackground: false
  },
  showAnnouncementEdit: {
    sender: 'generic',
    pl: {
      regEx: /^edytuj-ogloszenie\/\d+$/,
      url: '/edytuj-ogloszenie',
      title: 'Edytuj ogłoszenie | warsawlease.pl'
    },
    en: {
      regEx: /^edit-announcement\/\d+$/,
      url: '/edit-announcement',
      title: 'Edit Announcement | warsawlease.pl'
    },
    needsBackground: false
  },
  showUserShow: {
    sender: 'generic',
    pl: {
      regEx: /^konto$/,
      url: '/konto',
      title: 'Konto | warsawlease.pl'
    },
    en: {
      regEx: /^account$/,
      url: '/account',
      title: 'Account | warsawlease.pl'
    },
    needsBackground: true
  },

  showUserEditPasswordReset: {
    sender: 'generic',
    pl: {
      regEx: /^zresetuj-haslo$/,
      url: '/zresetuj-haslo',
      title: 'Zresetuj hasło | warsawlease.pl'
    },
    en: {
      regEx: /^reset-password$/,
      url: '/reset-password',
      title: 'Reset Password | warsawlease.pl'
    },
    needsBackground: true
  },
  showUserEditPhoneVerify: {
    sender: 'generic',
    pl: {
      regEx: /^zweryfikuj-numer-telefonu$/,
      url: '/zweryfikuj-numer-telefonu',
      title: 'Zweryfikuj numer telefonu | warsawlease.pl'
    },
    en: {
      regEx: /^verify-phone-number$/,
      url: '/verify-phone-number',
      title: 'Verify Phone Number | warsawlease.pl'
    },
    needsBackground: true
  },
  showUserEditAccount: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-konta$/,
      url: '/ustawienia-konta',
      title: 'Ustawienia konta | warsawlease.pl'
    },
    en: {
      regEx: /^account-settings$/,
      url: '/account-settings',
      title: 'Account Settings | warsawlease.pl'
    },
    needsBackground: false
  }
}
