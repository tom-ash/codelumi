import { PL, EN } from '../langs/langs'

export const ROOT_URLS = {
  [PL]: 'pl',
  [EN]: '/'
}

export const ANNOUNCEMENT_CREATE_URLS = {
  [PL]: 'dodaj-oferte',
  [EN]: 'post-a-job'
}

export const PAGE_CREATE_URLS = {
  [PL]: 'dodaj-strone',
  [EN]: 'add-page'
}

export const PAGE_EDIT_URLS = {
  [PL]: /^edytuj-strone\/.+$/,
  [EN]: /^edit-page\/.+$/
}

export const PAGE_INDEX_MAP_URLS = {
  [PL]: 'mapa-stron',
  [EN]: 'pages-map'
}

export const PAGE_INDEX_MANAGE_URLS = {
  [PL]: 'zarzadzaj-stronami',
  [EN]: 'manage-pages'
}

export const VISITOR_PRIVACY_SETTINGS_URLS = {
  [PL]: 'ustawienia-prywatnosci',
  [EN]: 'privacy-settings'
}

export const VISITOR_COOKIES_POLICY_URLS = {
  [PL]: 'polityka-cookies',
  [EN]: 'cookies-policy'
}

export const VISITOR_PRIVACY_POLICY_URLS = {
  [PL]: 'polityka-prywatnosci',
  [EN]: 'privacy-policy'
}

export const VISITOR_TERMS_OF_SERVICE_URLS = {
  [PL]: 'regulamin',
  [EN]: 'terms-of-service'
}

export const VISITOR_CONTACT_URLS = {
  [PL]: 'kontakt',
  [EN]: 'contact'
}
