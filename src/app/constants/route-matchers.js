export const routeMatchers = {
  showAnnouncementIndexVisitorMap: {
    route: {
      pl: '/',
      en: '/'
    }
  },

  showAnnouncementIndexVisitorList: {
    route: {
      pl: '/lista',
      en: '/list'
    }
  },

  showAnnouncementIndexUser: {
    route: {
      pl: 'dodane_ogloszenia',
      en: 'added_announcements'
    },
    main: true
  },
  showAnnouncementShow: {
    route: {
      pl: '\\d+',
      en: '\\d+'
    },
    main: true,
    announcementId: true
  },
  showAnnouncementCreate: {
    route: {
      pl: 'dodaj-ogloszenie',
      en: 'add-announcement'
    },
    main: true
  },
  showAnnouncementEdit: {
    route: {
      pl: 'edytuj_ogloszenie',
      en: 'edit_announcement'
    },
    main: true,
    announcementId: true
  },
  showVisitorPrivacySettings: {
    route: {
      pl: 'ustawienia-prywatnosci',
      en: 'privacy-settings'
    }
  },
  showUserCreate: {
    route: {
      pl: 'zarejestruj',
      en: 'sign-up'
    }
  },
  showUserAuthorize: {
    route: {
      pl: 'zaloguj',
      en: 'sign-in'
    }
  },
  showUserEditPasswordReset: {
    route: {
      pl: 'zresetuj_haslo',
      en: 'reset_password'
    }
  },
  showUserEditAccount: {
    route: {
      pl: 'ustawienia_konta',
      en: 'account_settings'
    },
    main: true,
  },
  showVisitorAbout: {
    route: {
      pl: 'o-serwisie',
      en: 'about'
    }
  },
  showVisitorContact: {
    route: {
      pl: 'kontakt',
      en: 'contact'
    }
  },
  showVisitorTermsOfService: {
    route: {
      pl: 'regulamin',
      en: 'terms-of-service'
    }
  },
  showVisitorCookiesPolicy: {
    route: {
      pl: 'polityka-plikow-cookies',
      en: 'cookies-policy'
    }
  },
  showVisitorPrivacyPolicy: {
    route: {
      pl: 'polityka-prywatnosci',
      en: 'privacy-policy'
    }
  },
  showVisitorPrivacySettings: {
    route: {
      pl: 'ustawienia-prywatnosci',
      en: 'privacy-settings'
    }
  }
}
