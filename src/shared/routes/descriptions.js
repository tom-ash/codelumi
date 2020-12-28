import {
  PL,
  EN
} from '../langs/langs'

import {
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_PRIVACY_POLICY,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_CONTACT,
  PAGE_CREATE,
  PAGE_INDEX_MAP,
  ANNOUNCEMENT_CREATE,
  ANNOUNCEMENT_INDEX_MAP,
  ANNOUNCEMENT_INDEX_CATALOGUE,
  ANNOUNCEMENT_INDEX_MY,
  USER_CREATE,
  USER_AUTHORIZE,
  USER_RESET_PASSWORD,
  USER_EDIT,
  USER_SHOW
} from '../tracks/tracks'

export const routeDescriptions = {
  [VISITOR_PRIVACY_SETTINGS]: {
    [PL]: 'Ustawienia Prywatności',
    [EN]: 'Privacy Settings'
  },
  [VISITOR_COOKIES_POLICY]: {
    [PL]: 'Polityka Cookies',
    [EN]: 'Cookies Policy'
  },
  [VISITOR_PRIVACY_POLICY]: {
    [PL]: 'Polityka Prywatności',
    [EN]: 'Privacy Policy'
  },
  [VISITOR_TERMS_OF_SERVICE]: {
    [PL]: 'Regulamin',
    [EN]: 'Terms of Service'
  },
  [VISITOR_CONTACT]: {
    [PL]: 'Kontakt',
    [EN]: 'Contact'
  },
  [PAGE_CREATE]: {
    [PL]: 'Dodaj stronę.',
    [EN]: 'Add page.'
  },
  [PAGE_INDEX_MAP]: {
    [PL]: 'Mapa stron',
    [EN]: 'Pages Map'
  },
  [ANNOUNCEMENT_CREATE]: {
    [PL]: 'Dodaj darmowe ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy lub biuro.',
    [EN]: 'Add free announcement of lease of real estate in Warsaw in the category: Apartment, Usable premises, Office.'
  },
  [ANNOUNCEMENT_INDEX_MAP]: {
    [PL]: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na mapie. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.',
    [EN]: 'Free announcements of real estate lease in Warsaw on the map. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
  },
  [ANNOUNCEMENT_INDEX_CATALOGUE]: {
    [PL]: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na liście. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.',
    [EN]: 'Free announcements of real estate lease in Warsaw on the list. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
  },
  [ANNOUNCEMENT_INDEX_MY]: {
    [PL]: 'Moje ogłoszenia.',
    [EN]: 'My Announcements.'
  },
  [USER_CREATE]: {
    [PL]: 'Zarejestruj konto na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.',
    [EN]: 'Sign Up to an Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
  },
  [USER_AUTHORIZE]: {
    [PL]: 'Zaloguj do konta na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.',
    [EN]: 'Sign In to the Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
  },
  [USER_RESET_PASSWORD]: {
    [PL]: 'Zresetuj hasło',
    [EN]: 'Reset Password'
  },
  [USER_EDIT]: {
    [PL]: 'Ustawienia konta',
    [EN]: 'Account Settings'
  },
  [USER_SHOW]: {
    [PL]: 'Moje konto.',
    [EN]: 'My Account.'
  }
}
