import {
  PL,
  EN
} from '../langs/langs'

import {
  ROOT,
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_POLICY,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_CONTACT,
  PAGE_CREATE,
  PAGE_INDEX_MAP,
  ANNOUNCEMENT_CREATE,
  ANNOUNCEMENT_EDIT,
  ANNOUNCEMENT_INDEX_MAP,
  ANNOUNCEMENT_INDEX_CATALOGUE,
  ANNOUNCEMENT_INDEX_MY,
  ANNOUNCEMENT_SHOW,
  USER_CREATE,
  USER_EDIT,
  USER_RESET_PASSWORD,
  USER_AUTHORIZE,
  USER_SHOW
} from '../tracks/tracks'

const routes = [
  {
    url: '/',
    track: ROOT,
    lang: PL
  },
  {
    url: 'ustawienia-prywatnosci',
    track: VISITOR_PRIVACY_SETTINGS,
    lang: PL
  },
  {
    url: 'privacy-settings',
    track: VISITOR_PRIVACY_SETTINGS,
    lang: EN
  },
  {
    url: 'polityka-cookies',
    track: VISITOR_COOKIES_POLICY,
    lang: PL
  },
  {
    url: 'cookies-policy',
    track: VISITOR_COOKIES_POLICY,
    lang: EN
  },
  {
    url: 'polityka-prywatnosci',
    track: VISITOR_PRIVACY_POLICY,
    lang: PL
  },
  {
    url: 'privacy-policy',
    track: VISITOR_PRIVACY_POLICY,
    lang: EN
  },
  {
    url: 'regulamin',
    track: VISITOR_TERMS_OF_SERVICE,
    lang: PL
  },
  {
    url: 'terms-of-service',
    track: VISITOR_TERMS_OF_SERVICE,
    lang: EN
  },
  {
    url: 'kontakt',
    track: VISITOR_CONTACT,
    lang: PL
  },
  {
    url: 'contact',
    track: VISITOR_CONTACT,
    lang: EN
  },
  {
    url: 'dodaj-strone',
    track: PAGE_CREATE,
    lang: PL
  },
  {
    url: 'add-page',
    track: PAGE_CREATE,
    lang: EN
  },
  {
    url: 'mapa-stron',
    track: PAGE_INDEX_MAP,
    lang: PL
  },
  {
    url: 'pages-map',
    track: PAGE_INDEX_MAP,
    lang: EN
  },
  {
    url: 'dodaj-ogloszenie-wynajmu-nieruchomosci-w-warszawie',
    track: ANNOUNCEMENT_CREATE,
    lang: PL
  },
  {
    url: 'add-announcement-of-real-estate-lease-in-warsaw',
    track: ANNOUNCEMENT_CREATE,
    lang: EN
  },
  {
    url: 'edytuj-ogloszenie',
    track: ANNOUNCEMENT_EDIT,
    lang: PL,
    withWildcards: true
  },
  {
    url: 'edit-announcement',
    track: ANNOUNCEMENT_EDIT,
    lang: EN,
    withWildcards: true
  },
  {
    url: 'mapa-nieruchomosci-na-wynajem-warszawa',
    track: ANNOUNCEMENT_INDEX_MAP,
    lang: PL
  },
  {
    url: 'map-of-real-estates-for-lease-warsaw',
    track: ANNOUNCEMENT_INDEX_MAP,
    lang: EN
  },
  {
    url: 'katalog-nieruchomosci-na-wynajem-warszawa',
    track: ANNOUNCEMENT_INDEX_CATALOGUE,
    lang: PL
  },
  {
    url: 'catalogue-of-real-estates-for-lease-warsaw',
    track: ANNOUNCEMENT_INDEX_CATALOGUE,
    lang: EN
  },
  {
    url: 'moje-ogloszenia',
    track: ANNOUNCEMENT_INDEX_MY,
    lang: PL
  },
  {
    url: 'my-announcements',
    track: ANNOUNCEMENT_INDEX_MY,
    lang: EN
  },
  {
    url: /^\/?\d+-.*-na-wynajem-warszawa-.*$/,
    track: ANNOUNCEMENT_SHOW,
    lang: PL,
    withWildcards: true
  },
  {
    url: /^\/?\d+-.*-for-lease-warsaw-.*$/,
    track: ANNOUNCEMENT_SHOW,
    lang: EN,
    withWildcards: true
  },
  {
    url: 'zarejestruj',
    track: USER_CREATE,
    lang: PL
  },
  {
    url: 'sign-up',
    track: USER_CREATE,
    lang: EN
  },
  {
    url: 'zaloguj',
    track: USER_AUTHORIZE,
    lang: PL
  },
  {
    url: 'sign-in',
    track: USER_AUTHORIZE,
    lang: EN
  },
  {
    url: 'zresetuj-haslo',
    track: USER_RESET_PASSWORD,
    lang: PL
  },
  {
    url: 'reset-password',
    track: USER_RESET_PASSWORD,
    lang: EN
  },
  {
    url: 'ustawienia-konta',
    track: USER_EDIT,
    lang: PL
  },
  {
    url: 'account-settings',
    track: USER_EDIT,
    lang: EN
  },
  {
    url: 'konto',
    track: USER_SHOW,
    lang: PL
  },
  {
    url: 'account',
    track: USER_SHOW,
    lang: EN
  }
]
