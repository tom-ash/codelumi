import {
  PL,
  EN
} from '../langs/langs'

import {
  ROOT_URLS,
  VISITOR_PRIVACY_SETTINGS_URLS,
  VISITOR_COOKIES_POLICY_URLS,
  VISITOR_PRIVACY_POLICY_URLS,
  VISITOR_TERMS_OF_SERVICE_URLS,
  VISITOR_CONTACT_URLS,
  PAGE_CREATE_URLS,
  PAGE_INDEX_MAP_URLS,
  ANNOUNCEMENT_CREATE_URLS,
  ANNOUNCEMENT_EDIT_URLS,
  ANNOUNCEMENT_INDEX_MAP_URLS,
  ANNOUNCEMENT_INDEX_CATALOGUE_URLS,
  ANNOUNCEMENT_INDEX_MY_URLS,
  ANNOUNCEMENT_SHOW_URLS,
  USER_CREATE_URLS,
  USER_AUTHORIZE_URLS,
  USER_RESET_PASSWORD_URLS,
  USER_EDIT_URLS,
  USER_SHOW_URLS
} from './urls'

import {
  ROOT_TRACK,
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

export default [
  {
    url: ROOT_URLS,
    track: ROOT_TRACK,
    lang: PL
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[PL],
    track: VISITOR_PRIVACY_SETTINGS,
    lang: PL
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[EN],
    track: VISITOR_PRIVACY_SETTINGS,
    lang: EN
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[PL],
    track: VISITOR_COOKIES_POLICY,
    lang: PL
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[EN],
    track: VISITOR_COOKIES_POLICY,
    lang: EN
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[PL],
    track: VISITOR_PRIVACY_POLICY,
    lang: PL
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[EN],
    track: VISITOR_PRIVACY_POLICY,
    lang: EN
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[PL],
    track: VISITOR_TERMS_OF_SERVICE,
    lang: PL
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[EN],
    track: VISITOR_TERMS_OF_SERVICE,
    lang: EN
  },
  {
    url: VISITOR_CONTACT_URLS[PL],
    track: VISITOR_CONTACT,
    lang: PL
  },
  {
    url: VISITOR_CONTACT_URLS[EN],
    track: VISITOR_CONTACT,
    lang: EN
  },
  {
    url: PAGE_CREATE_URLS[PL],
    track: PAGE_CREATE,
    lang: PL
  },
  {
    url: PAGE_CREATE_URLS[EN],
    track: PAGE_CREATE,
    lang: EN
  },
  {
    url: PAGE_INDEX_MAP_URLS[PL],
    track: PAGE_INDEX_MAP,
    lang: PL
  },
  {
    url: PAGE_INDEX_MAP_URLS[EN],
    track: PAGE_INDEX_MAP,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_CREATE_URLS[PL],
    track: ANNOUNCEMENT_CREATE,
    lang: PL
  },
  {
    url: ANNOUNCEMENT_CREATE_URLS[EN],
    track: ANNOUNCEMENT_CREATE,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_EDIT_URLS[PL],
    track: ANNOUNCEMENT_EDIT,
    lang: PL,
    withWildcards: true
  },
  {
    url: ANNOUNCEMENT_EDIT_URLS[EN],
    track: ANNOUNCEMENT_EDIT,
    lang: EN,
    withWildcards: true
  },
  {
    url: ANNOUNCEMENT_INDEX_MAP_URLS[PL],
    track: ANNOUNCEMENT_INDEX_MAP,
    lang: PL
  },
  {
    url: ANNOUNCEMENT_INDEX_MAP_URLS[EN],
    track: ANNOUNCEMENT_INDEX_MAP,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_INDEX_CATALOGUE_URLS[PL],
    track: ANNOUNCEMENT_INDEX_CATALOGUE,
    lang: PL
  },
  {
    url: ANNOUNCEMENT_INDEX_CATALOGUE_URLS[EN],
    track: ANNOUNCEMENT_INDEX_CATALOGUE,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_INDEX_MY_URLS[PL],
    track: ANNOUNCEMENT_INDEX_MY,
    lang: PL
  },
  {
    url: ANNOUNCEMENT_INDEX_MY_URLS[EN],
    track: ANNOUNCEMENT_INDEX_MY,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_SHOW_URLS[PL],
    track: ANNOUNCEMENT_SHOW,
    lang: PL,
    withWildcards: true
  },
  {
    url: ANNOUNCEMENT_SHOW_URLS[EN],
    track: ANNOUNCEMENT_SHOW,
    lang: EN,
    withWildcards: true
  },
  {
    url: USER_CREATE_URLS[PL],
    track: USER_CREATE,
    lang: PL
  },
  {
    url: USER_CREATE_URLS[EN],
    track: USER_CREATE,
    lang: EN
  },
  {
    url: USER_AUTHORIZE_URLS[PL],
    track: USER_AUTHORIZE,
    lang: PL
  },
  {
    url: USER_AUTHORIZE_URLS[EN],
    track: USER_AUTHORIZE,
    lang: EN
  },
  {
    url: USER_RESET_PASSWORD_URLS[PL],
    track: USER_RESET_PASSWORD,
    lang: PL
  },
  {
    url: USER_RESET_PASSWORD_URLS[EN],
    track: USER_RESET_PASSWORD,
    lang: EN
  },
  {
    url: USER_EDIT_URLS[PL],
    track: USER_EDIT,
    lang: PL
  },
  {
    url: USER_EDIT_URLS[EN],
    track: USER_EDIT,
    lang: EN
  },
  {
    url: USER_SHOW_URLS[PL],
    track: USER_SHOW,
    lang: PL
  },
  {
    url: USER_SHOW_URLS[EN],
    track: USER_SHOW,
    lang: EN
  }
]
