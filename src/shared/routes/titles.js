import {
  PL,
  EN
} from '../langs/langs'

import {
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_COOKIES_POLICY,
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

export const routeTitles = {
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
    [PL]: 'Dodaj stronę',
    [EN]: 'Add Page'
  },
  [PAGE_INDEX_MAP]: {
    [PL]: 'Mapa stron',
    [EN]: 'Pages Map'
  },
  [ANNOUNCEMENT_CREATE]: {
    [PL]: 'Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy, biuro',
    [EN]: 'Add Free Announcement of Lease of Real Estate in Warsaw in the category: Apartment, Usable premises, Office'
  },
  [ANNOUNCEMENT_INDEX_MAP]: {
    [PL]: 'Mapa nieruchomości na wynajem w Warszawie - Mieszkania, biura i lokale użytkowe',
    [EN]: 'Map of Real Estates for Lease in Warsaw - Apartments, Offices and Usable premises'
  },
  [ANNOUNCEMENT_INDEX_CATALOGUE]: {
    [PL]: 'Katalog nieruchomości na wynajem w Warszawie - Mieszkania, biura i lokale użytkowe',
    [EN]: 'Catalogue of Real Estates for Lease in Warsaw - Apartments, offices and usable premises'
  },
  [ANNOUNCEMENT_INDEX_MY]: {
    [PL]: 'Moje ogłoszenia',
    [EN]: 'My Announcements'
  },
  [USER_CREATE]: {
    [PL]: 'Zarejestruj',
    [EN]: 'Sign Up'
  },
  [USER_AUTHORIZE]: {
    [PL]: 'Zaloguj',
    [EN]: 'Sign In'
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
    [PL]: 'Moje konto',
    [EN]: 'My Account'
  }
}
