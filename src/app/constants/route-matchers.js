export const routeMatchers = {
  showAnnouncementIndexMap: {
    route: {
      pl: '',
      en: ''
    }
  },
  showAnnouncementIndexList: {
    route: {
      pl: '/lista',
      en: '/list'
    }
  },
  showAnnouncementIndexAdded: {
    route: {
      pl: '/dodane-ogloszenia',
      en: '/added-announcements'
    },
    main: true
  },
  showAnnouncementShow: {
    route: {
      pl: '^(\\/\\d+)',
      en: '^(\\/\\d+)'
    },
    main: true,
    announcementId: true
  },
  showAnnouncementCreate: {
    route: {
      pl: '/dodaj-ogloszenie',
      en: '/add-announcement'
    },
    main: true
  },
  showAnnouncementEdit: {
    route: {
      pl: '/edytuj-ogloszenie',
      en: '/edit-announcement'
    },
    main: true,
    announcementId: true
  },
  showVisitorPrivacySettings: {
    route: {
      pl: '/ustawienia-prywatnosci',
      en: '/privacy-settings'
    }
  },
  showUserCreate: {
    route: {
      pl: '/zarejestruj',
      en: '/sign-up'
    }
  },
  showUserAuthorize: {
    route: {
      pl: '/zaloguj',
      en: '/sign-in'
    }
  },
  showUserEditPasswordReset: {
    route: {
      pl: '/zresetuj-haslo',
      en: '/reset-password'
    }
  },
  showUserEditAccount: {
    route: {
      pl: '/ustawienia-konta',
      en: '/account-settings'
    },
    main: true,
  },
  showVisitorAbout: {
    route: {
      pl: '/o-serwisie',
      en: '/about'
    }
  },
  showVisitorContact: {
    route: {
      pl: '/kontakt',
      en: '/contact'
    }
  },
  showVisitorTermsOfService: {
    route: {
      pl: '/regulamin',
      en: '/terms-of-service'
    }
  },
  showVisitorCookiesPolicy: {
    route: {
      pl: '/polityka-cookies',
      en: '/cookies-policy'
    }
  },
  showVisitorPrivacyPolicy: {
    route: {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy'
    }
  },
  showVisitorPrivacySettings: {
    route: {
      pl: '/ustawienia-prywatnosci',
      en: '/privacy-settings'
    }
  }
}
