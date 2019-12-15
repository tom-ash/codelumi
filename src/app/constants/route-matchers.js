export const routeMatchers = {
  showAnnouncementIndexVisitor: {
    route: {
      pl: '/',
      en: '/'
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
      pl: 'dodaj_ogloszenie',
      en: 'add_announcement'
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
      pl: 'ustawienia_prywatnosci',
      en: 'privacy_settings'
    }
  },
  showUserCreate: {
    route: {
      pl: 'zarejestruj',
      en: 'sign_up'
    }
  },
  showUserAuthorize: {
    route: {
      pl: 'zaloguj',
      en: 'sign_in'
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
      pl: 'o_serwisie',
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
      en: 'terms_of_service'
    }
  },
  showVisitorCookiesPolicy: {
    route: {
      pl: 'polityka_plikow_cookies',
      en: 'cookies_policy'
    }
  },
  showVisitorPrivacyPolicy: {
    route: {
      pl: 'polityka_prywatnosci',
      en: 'privacy_policy'
    }
  },
  showVisitorPrivacySettings: {
    route: {
      pl: 'ustawienia_prywatnosci',
      en: 'privacy_settings'
    }
  }
}
