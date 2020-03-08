export const routes = {
  showAnnouncementIndexMap: {
    sender: 'map',
    pl: {
      regEx: /(^$)/,
      url: '/',
      title: 'Mapa ogłoszeń wynajmu nieruchomości w Warszawie',
      description: 'Nieruchomości (mieszkania, lokale użytkowe oraz biura) na wynajem w Warszawie.'
    },
    en: {
      regEx: /(^$)/,
      url: '/',
      title: 'Map of Warsaw Real Estate Lease Announcements',
      description: 'Real Estate (Apartments, Usable Premises and Offices) for Lease in Warsaw.'
    },
    overshadow: false
  },
  showAnnouncementIndexList: {
    sender: 'list',
    pl: {
      regEx: /(^lista$)/,
      url: '/lista',
      title: 'Lista ogłoszeń wynajmu nieruchomości w Warszawie',
      description: 'Nieruchomości (mieszkania, lokale użytkowe oraz biura) na wynajem w Warszawie.'
    },
    en: {
      regEx: /(^list$)/,
      url: '/list',
      title: 'List of Warsaw Real Estate Lease Announcements',
      description: 'Real Estate (Apartments, Usable Premises and Offices) for Lease in Warsaw.'
    },
    overshadow: true
  },
  showAnnouncementShow: {
    sender: 'announcement',
    pl: { regEx: /(^\d+$)/ },
    en: { regEx: /(^\d+$)/ },
    overshadow: false
  },  
  showAnnouncementCreate: {
    sender: 'generic',
    pl: {
      regEx: /^dodaj-ogloszenie$/,
      url: '/dodaj-ogloszenie',
      title: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości w Warszawie',
      description: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości (mieszkania, lokalu użytkowego lub biura) w Warszawie'
    },
    en: {
      regEx: /^add-announcement$/,
      url: '/add-announcement',
      title: 'Add Free Announcement of Real Estate Lease in Warsaw',
      description: 'Add Free Announcement of Real Estate (apartment, usable premises or office) Lease in Warsaw',
    },
    overshadow: false
  },
  showUserCreate: {
    sender: 'generic',
    pl: {
      regEx: /^zarejestruj$/,
      url: '/zarejestruj',
      title: 'Zarejestruj',
      description: 'Zarejestruj'
    },
    en: {
      regEx: /^sign-up$/,
      url: '/sign-up',
      title: 'Sign Up',
      description: 'Sign Up'
    },
    needsBackground: true,
    overshadow: true
  },
  showUserAuthorize: {
    sender: 'generic',
    pl: {
      regEx: /^zaloguj$/,
      url: '/zaloguj',
      title: 'Zaloguj',
      description: 'Zaloguj'
    },
    en: {
      regEx: /^sign-in$/,
      url: '/sign-in',
      title: 'Sign In',
      description: 'Sign In'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorAbout: {
    sender: 'generic',
    pl: {
      regEx: /^o-serwisie$/,
      url: '/o-serwisie',
      title: 'O Serwisie',
      description: 'O Serwisie'
    },
    en: {
      regEx: /^about$/,
      url: '/about',
      title: 'About',
      description: 'About'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorContact: {
    sender: 'generic',
    pl: {
      regEx: /^kontakt$/,
      url: '/kontakt',
      title: 'Kontakt',
      description: 'Kontakt'
    },
    en: {
      regEx: /^contact$/,
      url: '/contact',
      title: 'Contact',
      description: 'Contact'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorTermsOfService: {
    sender: 'generic',
    pl: {
      regEx: /^regulamin$/,
      url: '/regulamin',
      title: 'Regulamin',
      description: 'Regulamin'
    },
    en: {
      regEx: /^terms-of-service$/,
      url: '/terms-of-service',
      title: 'Terms of Service',
      description: 'Terms of Service'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorCookiesPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-cookies$/,
      url: '/polityka-cookies',
      title: 'Polityka Cookies',
      description: 'Polityka Cookies'
    },
    en: {
      regEx: /^cookies-policy$/,
      url: '/cookies-policy',
      title: 'Cookies Policy',
      description: 'Cookies Policy'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorPrivacyPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-prywatnosci$/,
      url: '/polityka-prywatnosci',
      title: 'Polityka Prywatności',
      description: 'Polityka Prywatności'
    },
    en: {
      regEx: /^privacy-policy$/,
      url: '/privacy-policy',
      title: 'Privacy Policy',
      description: 'Privacy Policy'
    },
    needsBackground: true,
    overshadow: true
  },
  showVisitorPrivacySettings: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-prywatnosci$/,
      url: '/ustawienia-prywatnosci',
      title: 'Ustawienia Prywatności',
      description: 'Ustawienia Prywatności'
    },
    en: {
      regEx: /^privacy-settings$/,
      url: '/privacy-settings',
      title: 'Privacy Settings',
      description: 'Privacy Settings'
    },
    needsBackground: true,
    overshadow: true
  },
  showAnnouncementIndexAdded: {
    sender: 'generic',
    pl: {
      regEx: /^dodane-ogloszenia$/,
      url: '/dodane-ogloszenia',
      title: 'Dodane ogłoszenia',
      description: 'Dodane ogłoszenia'
    },
    en: {
      regEx: /^added-announcements$/,
      url: '/added-announcements',
      title: 'Added Announcements',
      description: 'Added Announcements'
    },
    needsBackground: false,
    overshadow: false
  },
  showAnnouncementEdit: {
    sender: 'generic',
    pl: {
      regEx: /^edytuj-ogloszenie\/\d+$/,
      url: '/edytuj-ogloszenie',
      title: 'Edytuj ogłoszenie',
      description: 'Edytuj ogłoszenie'
    },
    en: {
      regEx: /^edit-announcement\/\d+$/,
      url: '/edit-announcement',
      title: 'Edit Announcement',
      description: 'Edit Announcement'
    },
    needsBackground: false,
    overshadow: false
  },
  showUserShow: {
    sender: 'generic',
    pl: {
      regEx: /^konto$/,
      url: '/konto',
      title: 'Konto',
      description: 'Konto'
    },
    en: {
      regEx: /^account$/,
      url: '/account',
      title: 'Account',
      description: 'Account'
    },
    needsBackground: true,
    overshadow: true
  },

  showUserEditPasswordReset: {
    sender: 'generic',
    pl: {
      regEx: /^zresetuj-haslo$/,
      url: '/zresetuj-haslo',
      title: 'Zresetuj hasło',
      description: 'Zresetuj hasło'
    },
    en: {
      regEx: /^reset-password$/,
      url: '/reset-password',
      title: 'Reset Password',
      description: 'Reset Password'
    },
    needsBackground: true,
    overshadow: true
  },
  showUserEditPhoneVerify: {
    sender: 'generic',
    pl: {
      regEx: /^zweryfikuj-numer-telefonu$/,
      url: '/zweryfikuj-numer-telefonu',
      title: 'Zweryfikuj numer telefonu',
      description: 'Zweryfikuj numer telefonu'
    },
    en: {
      regEx: /^verify-phone-number$/,
      url: '/verify-phone-number',
      title: 'Verify Phone Number',
      description: 'Verify Phone Number'
    },
    needsBackground: true,
    overshadow: true
  },
  showUserEditAccount: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-konta$/,
      url: '/ustawienia-konta',
      title: 'Ustawienia konta',
      description: 'Ustawienia konta'
    },
    en: {
      regEx: /^account-settings$/,
      url: '/account-settings',
      title: 'Account Settings',
      description: 'Account Settings'
    },
    needsBackground: false,
    overshadow: false
  }
}
