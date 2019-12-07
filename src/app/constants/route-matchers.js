export const routeMatchers = {
  showAnnouncementIndexVisitor: {
    route: {
      polish: '/',
      english: '/'
    }
  },
  showAnnouncementIndexUser: {
    route: {
      polish: 'dodane_ogloszenia',
      english: 'added_announcements'
    },
    main: true
  },
  showAnnouncementShow: {
    route: {
      polish: '\\d+',
      english: '\\d+'
    },
    main: true,
    announcementId: true
  },
  showAnnouncementCreate: {
    route: {
      polish: 'dodaj_ogloszenie',
      english: 'add_announcement'
    },
    main: true
  },
  showAnnouncementEdit: {
    route: {
      polish: 'edytuj_ogloszenie',
      english: 'edit_announcement'
    },
    main: true,
    announcementId: true
  },
  showVisitorPrivacySettings: {
    route: {
      polish: 'ustawienia_prywatnosci',
      english: 'privacy_settings'
    }
  },
  showUserCreate: {
    route: {
      polish: 'zarejestruj',
      english: 'sign_up'
    }
  },
  showUserAuthorize: {
    route: {
      polish: 'zaloguj',
      english: 'sign_in'
    }
  },
  showUserEditPasswordReset: {
    route: {
      polish: 'zresetuj_haslo',
      english: 'reset_password'
    }
  },
  showUserEditAccount: {
    route: {
      polish: 'ustawienia_konta',
      english: 'account_settings'
    }
  },
  showVisitorAbout: {
    route: {
      polish: 'o_serwisie',
      english: 'about'
    }
  },
  showVisitorContact: {
    route: {
      polish: 'kontakt',
      english: 'contact'
    }
  },
  showVisitorTermsOfService: {
    route: {
      polish: 'regulamin',
      english: 'terms_of_service'
    }
  },
  showVisitorCookiesPolicy: {
    route: {
      polish: 'polityka_plikow_cookies',
      english: 'cookies_policy'
    }
  },
  showVisitorPrivacyPolicy: {
    route: {
      polish: 'polityka_prywatnosci',
      english: 'privacy_policy'
    }
  },
  showVisitorPrivacySettings: {
    route: {
      polish: 'ustawienia_prywatnosci',
      english: 'privacy_settings'
    }
  }
}
