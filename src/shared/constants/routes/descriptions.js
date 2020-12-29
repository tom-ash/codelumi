import {
  PL,
  EN
} from '../langs/langs'

import {
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_CONTACT_TRACK,
  PAGE_CREATE_TRACK,
  PAGE_INDEX_MAP_TRACK,
  ANNOUNCEMENT_CREATE_TRACK,
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK,
  USER_CREATE_TRACK,
  USER_AUTHORIZE_TRACK,
  USER_RESET_PASSWORD_TRACK,
  USER_EDIT_TRACK,
  USER_SHOW_TRACK
} from '../tracks/tracks'

export const routeDescriptions = {
  [VISITOR_PRIVACY_SETTINGS_TRACK]: {
    [PL]: 'Ustawienia Prywatności',
    [EN]: 'Privacy Settings'
  },
  [VISITOR_COOKIES_POLICY_TRACK]: {
    [PL]: 'Polityka Cookies',
    [EN]: 'Cookies Policy'
  },
  [VISITOR_PRIVACY_POLICY_TRACK]: {
    [PL]: 'Polityka Prywatności',
    [EN]: 'Privacy Policy'
  },
  [VISITOR_TERMS_OF_SERVICE_TRACK]: {
    [PL]: 'Regulamin',
    [EN]: 'Terms of Service'
  },
  [VISITOR_CONTACT_TRACK]: {
    [PL]: 'Kontakt',
    [EN]: 'Contact'
  },
  [PAGE_CREATE_TRACK]: {
    [PL]: 'Dodaj stronę.',
    [EN]: 'Add page.'
  },
  [PAGE_INDEX_MAP_TRACK]: {
    [PL]: 'Mapa stron',
    [EN]: 'Pages Map'
  },
  [ANNOUNCEMENT_CREATE_TRACK]: {
    [PL]: 'Dodaj darmowe ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy lub biuro.',
    [EN]: 'Add free announcement of lease of real estate in Warsaw in the category: Apartment, Usable premises, Office.'
  },
  [ANNOUNCEMENT_INDEX_MAP_TRACK]: {
    [PL]: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na mapie. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.',
    [EN]: 'Free announcements of real estate lease in Warsaw on the map. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
  },
  [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: {
    [PL]: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na liście. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.',
    [EN]: 'Free announcements of real estate lease in Warsaw on the list. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
  },
  [ANNOUNCEMENT_INDEX_MY_TRACK]: {
    [PL]: 'Moje ogłoszenia.',
    [EN]: 'My Announcements.'
  },
  [USER_CREATE_TRACK]: {
    [PL]: 'Zarejestruj konto na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.',
    [EN]: 'Sign Up to an Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
  },
  [USER_AUTHORIZE_TRACK]: {
    [PL]: 'Zaloguj do konta na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.',
    [EN]: 'Sign In to the Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
  },
  [USER_RESET_PASSWORD_TRACK]: {
    [PL]: 'Zresetuj hasło',
    [EN]: 'Reset Password'
  },
  [USER_EDIT_TRACK]: {
    [PL]: 'Ustawienia konta',
    [EN]: 'Account Settings'
  },
  [USER_SHOW_TRACK]: {
    [PL]: 'Moje konto.',
    [EN]: 'My Account.'
  }
}
