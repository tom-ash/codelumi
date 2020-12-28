import {
  PL,
  EN
} from '../langs/langs'

import {
  ANNOUNCEMENT_INDEX_MAP,
  ANNOUNCEMENT_INDEX_CATALOGUE,
  ANNOUNCEMENT_INDEX_LIST,
  ANNOUNCEMENT_SHOW,
  ANNOUNCEMENTS_CREATE,
  ANNOUNCEMENTS_EDIT,
  PAGES_INDEX_MAP,
  PAGES_CREATE,
  USERS_CREATE,
  VISITORS_CONTACT,
  VISITORS_TERMS_OF_SERVICE,
  VISITORS_COOKIES_POLICY,
  VISITORS_PRIVACY_POLICY,
  USER_EDIT_PASSWORD,
  USER_EDIT_SETTINGS

} from '../tracks/tracks'

const routes = [
  {
    url: 'mapa-nieruchomosci-na-wynajem-warszawa',
    track: ANNOUNCEMENT_INDEX_MAP,
    lang: PL,
    title: 'Mapa nieruchomości na wynajem w Warszawie - Mieszkania, biura i lokale użytkowe',
    description: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na mapie. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.'
  },
  {
    url: 'map-of-real-estates-for-lease-warsaw',
    track: ANNOUNCEMENT_INDEX_MAP,
    lang: EN,
    title: 'Map of Real Estates for Lease in Warsaw - Apartments, Offices and Usable premises',
    description: 'Free announcements of real estate lease in Warsaw on the map. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
  },
  {
    url: 'katalog-nieruchomosci-na-wynajem-warszawa',
    track: ANNOUNCEMENT_INDEX_CATALOGUE,
    lang: PL,
    title: 'Katalog nieruchomości na wynajem w Warszawie - Mieszkania, biura i lokale użytkowe',
    description: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na liście. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.'
  },
  {
    url: 'catalogue-of-real-estates-for-lease-warsaw',
    track: ANNOUNCEMENT_INDEX_CATALOGUE,
    lang: EN,
    title: 'Catalogue of Real Estates for Lease in Warsaw - Apartments, offices and usable premises',
    description: 'Free announcements of real estate lease in Warsaw on the list. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
  },
  {
    url: 'dodane-ogloszenia',
    track: ANNOUNCEMENT_INDEX_LIST,
    lang: PL,
    title: 'Dodane ogłoszenia',
    description: 'Dodane ogłoszenia'
  },
  {
    url: 'added-announcements',
    track: ANNOUNCEMENT_INDEX_LIST,
    lang: EN,
    title: 'Added Announcements',
    description: 'Added Announcements'
  },
  {
    url: /^\/?\d+-.*-na-wynajem-warszawa-.*$/,
    track: ANNOUNCEMENT_SHOW,
    lang: PL
  },
  {
    url: /^\/?\d+-.*-for-lease-warsaw-.*$/,
    track: ANNOUNCEMENT_SHOW,
    lang: EN
  },
  {
    url: 'dodaj-ogloszenie-wynajmu-nieruchomosci-w-warszawie',
    track: ANNOUNCEMENTS_CREATE,
    lang: PL,
    title: 'Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy, biuro',
    description: 'Dodaj darmowe ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy lub biuro.'
  },
  {
    url: 'add-announcement-of-real-estate-lease-in-warsaw',
    track: ANNOUNCEMENTS_CREATE,
    lang: EN,
    title: 'Add Free Announcement of Lease of Real Estate in Warsaw in the category: Apartment, Usable premises, Office',
    description: 'Add free announcement of lease of real estate in Warsaw in the category: Apartment, Usable premises, Office.'
  },
  {
    url: 'mapa-stron',
    track: PAGES_INDEX_MAP,
    lang: PL,
    title: 'Mapa stron warsawlease.pl',
    description: 'Mapa stron warsawlease.pl'
  },
  {
    url: 'pages-map',
    track: PAGES_INDEX_MAP,
    lang: EN,
    title: 'Pages Map warsawlease.pl',
    description: 'Pages Map warsawlease.pl'
  },
  {
    url: 'dodaj-strone',
    track: PAGES_CREATE,
    lang: PL,
    title: 'Dodaj stronę',
    description: 'Dodaj stronę.'
  },
  {
    url: 'add-page',
    track: PAGES_CREATE,
    lang: EN,
    title: 'Add Page',
    description: 'Add page.'
  },
  {
    url: 'zarejestruj',
    track: USERS_CREATE,
    lang: PL,
    title: 'Zarejestruj',
    description: 'Zarejestruj konto na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.'
  },
  {
    url: 'sign-up',
    track: USERS_CREATE,
    lang: EN,
    title: 'Sign Up',
    description: 'Sign Up to an Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
  },
  {
    url: 'zaloguj',
    track: USERS_AUTHORIZE,
    lang: PL,
    title: 'Zaloguj',
    description: 'Zaloguj do konta na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.'
  },
  {
    url: 'sign-in',
    track: USERS_AUTHORIZE,
    lang: EN,
    title: 'Sign In',
    description: 'Sign In to the Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
  },
  {
    url: 'kontakt',
    track: VISITORS_CONTACT,
    lang: PL,
    title: 'Kontakt',
    description: 'Kontakt'
  },
  {
    url: 'contact',
    track: VISITORS_CONTACT,
    lang: EN,
    title: 'Contact',
    description: 'Contact'
  },
  {
    url: 'regulamin',
    track: VISITORS_TERMS_OF_SERVICE,
    lang: PL,
    title: 'Regulamin',
    description: 'Regulamin'
  },
  {
    url: 'terms-of-service',
    track: VISITORS_TERMS_OF_SERVICE,
    lang: EN,
    title: 'Terms of Service',
    description: 'Terms of Service'
  },
  {
    url: 'polityka-cookies',
    track: VISITORS_COOKIES_POLICY,
    lang: PL,
    title: 'Polityka Cookies',
    description: 'Polityka Cookies'
  },
  {
    url: 'cookies-policy',
    track: VISITORS_COOKIES_POLICY,
    lang: EN,
    title: 'Cookies Policy',
    description: 'Cookies Policy'
  },
  {
    url: 'polityka-prywatnosci',
    track: VISITORS_PRIVACY_POLICY,
    lang: PL,
    title: 'Polityka Prywatności',
    description: 'Polityka Prywatności'
  },
  {
    url: 'privacy-policy',
    track: VISITORS_PRIVACY_POLICY,
    lang: EN,
    title: 'Privacy Policy',
    description: 'Privacy Policy'
  },

  {
    url: 'ustawienia-prywatnosci',
    track: VISITORS_PRIVACY_SETTINGS,
    lang: PL,
    title: 'Ustawienia Prywatności',
    description: 'Ustawienia Prywatności'
  },
  {
    url: 'privacy-settings',
    track: VISITORS_PRIVACY_SETTINGS,
    lang: EN,
    title: 'Privacy Settings',
    description: 'Privacy Settings'
  },
  {
    url: 'edytuj-ogloszenie',
    track: ANNOUNCEMENTS_EDIT,
    lang: PL,
    title: 'Edytuj ogłoszenie',
    description: 'Edytuj ogłoszenie'
  },
  {
    url: 'edit-announcement',
    track: ANNOUNCEMENTS_EDIT,
    lang: EN,
    title: 'Edit Announcement',
    description: 'Edit Announcement'
  },
  {
    url: 'konto',
    track: USER_SHOW,
    lang: PL,
    title: 'Konto',
    description: 'Konto'
  },
  {
    url: 'account',
    track: USER_SHOW,
    lang: EN,
    title: 'Account',
    description: 'Account'
  },
  {
    url: 'zresetuj-haslo',
    track: USER_EDIT_PASSWORD,
    lang: PL,
    title: '',
    description: ''
  },
  {
    url: 'reset-password',
    track: USER_EDIT_PASSWORD,
    lang: EN,
    title: 'Reset Password',
    description: 'Reset Password'
  },
  {
    url: 'ustawienia-konta',
    track: USER_EDIT_SETTINGS,
    lang: PL,
    title: 'Ustawienia konta',
    description: 'Ustawienia konta'
  },
  {
    url: 'account-settings',
    track: USER_EDIT_SETTINGS,
    lang: EN,
    title: 'Account Settings',
    description: 'Account Settings'
  }
]
