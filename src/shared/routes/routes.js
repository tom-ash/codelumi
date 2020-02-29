export const routes = {
  showAnnouncementIndexMap: {
    sender: 'generic',
    pl: {
      regEx: /(^$)/,
      title: 'Mapa wynajmu warszawskich nieruchomości | warsawlease.pl'
    },
    en: {
      regEx: /(^$)/,
      title: 'Map of Warsaw property lease | warsawlease.pl'
    },
  },
  showAnnouncementIndexList: {
    sender: 'list',
    pl: {
      regEx: /(^lista$)/,
      title: 'Lista ogłoszeń wynajmu warszawskich nieruchomości | warsawlease.pl'
    },
    en: {
      regEx: /(^list$)/,
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
      title: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości w Warszawie | warsawlease.pl'
    },
    en: {
      regEx: /^add-announcement$/,
      title: 'Add Free Announcement of Real Estate Lease in Warsaw | warsawlease.pl'
    }
  },
  showUserCreate: {
    sender: 'generic',
    pl: {
      regEx: /^zarejestruj$/,
      title: 'Zarejestruj | warsawlease.pl'
    },
    en: {
      regEx: /^sign-up$/,
      title: 'Sign Up | warsawlease.pl'
    },
    needsBackground: true
  },
  showUserAuthorize: {
    sender: 'generic',
    pl: {
      regEx: /^zaloguj$/,
      title: 'Zaloguj | warsawlease.pl'
    },
    en: {
      regEx: /^sign-in$/,
      title: 'Sign In | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorAbout: {
    sender: 'generic',
    pl: {
      regEx: /^o-serwisie$/,
      title: 'O Serwisie | warsawlease.pl'
    },
    en: {
      regEx: /^about$/,
      title: 'About | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorContact: {
    sender: 'generic',
    pl: {
      regEx: /^kontakt$/,
      title: 'Kontakt | warsawlease.pl'
    },
    en: {
      regEx: /^contact$/,
      title: 'Contact | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorTermsOfService: {
    sender: 'generic',
    pl: {
      regEx: /^regulamin$/,
      title: 'Kontakt | warsawlease.pl'
    },
    en: {
      regEx: /^terms-of-service$/,
      title: 'Terms of Service | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorCookiesPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-plikow-cookies$/,
      title: 'Polityka Plików Cookies | warsawlease.pl'
    },
    en: {
      regEx: /^cookies-policy$/,
      title: 'Cookies Policy | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorPrivacyPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^polityka-prywatnosci$/,
      title: 'Polityka Prywatności | warsawlease.pl'
    },
    en: {
      regEx: /^privacy-policy$/,
      title: 'Privacy Policy | warsawlease.pl'
    },
    needsBackground: true
  },
  showVisitorPrivacySettings: {
    sender: 'generic',
    pl: {
      regEx: /^ustawienia-prywatnosci$/,
      title: 'Ustawienia Prywatności | warsawlease.pl'
    },
    en: {
      regEx: /^privacy-settings$/,
      title: 'Privacy Settings | warsawlease.pl'
    },
    needsBackground: true
  }
}
