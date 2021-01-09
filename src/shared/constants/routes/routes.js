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
  ANNOUNCEMENT_INDEX_CATALOGUE_URLS,
  ANNOUNCEMENT_INDEX_MY_URLS,
  ANNOUNCEMENT_SHOW_URLS,
  USER_CREATE_URLS,
  USER_AUTHORIZE_URLS,
  USER_RESET_PASSWORD_URLS,
  USER_EDIT_URLS
} from './urls'
import {
  ROOT_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_CONTACT_TRACK,
  PAGE_CREATE_TRACK,
  PAGE_INDEX_MAP_TRACK,
  ANNOUNCEMENT_CREATE_TRACK,
  ANNOUNCEMENT_EDIT_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK,
  ANNOUNCEMENT_SHOW_TRACK,
  USER_CREATE_TRACK,
  USER_EDIT_TRACK,
  USER_EDIT_PASSWORD_TRACK,
  USER_AUTHORIZE_TRACK
} from '../tracks/tracks'
import {
  ROOT_TITLES,  
  VISITOR_CONTACT_TITLES,
  VISITOR_COOKIES_POLICY_TITLES,
  VISITOR_PRIVACY_POLICY_TITLES,
  VISITOR_PRIVACY_SETTINGS_TITLES,
  VISITOR_TERMS_OF_SERVICE_TITLES,
  PAGE_CREATE_TITLES,
  PAGE_INDEX_MAP_TITLES,
  ANNOUNCEMENT_CREATE_TITLES,
  ANNOUNCEMENT_EDIT_TITLES,
  ANNOUNCEMENT_INDEX_CATALOGUE_TITLES,
  ANNOUNCEMENT_INDEX_MY_TITLES,
  ANNOUNCEMENT_SHOW_TITLES,
  USER_CREATE_TITLES,
  USER_AUTHORIZE_TITLES,
  USER_RESET_PASSWORD_TITLES,
  USER_EDIT_TITLES
} from './titles'
import {
  ROOT_KEYWORDS,
  ANNOUNCEMENT_CREATE_KEYWORDS,
  ANNOUNCEMENT_INDEX_CATALOGUE_KEYWORDS
} from './keywords'
import {
  ROOT_DESCRIPTIONS,
  ANNOUNCEMENT_CREATE_DESCRIPTIONS,
  ANNOUNCEMENT_INDEX_CATALOGUE_DESCRIPTIONS
} from './descriptions'
import { buildAnnouncementShowUrl } from '../../functions/builders/announcement/show-url'
import { buildAnnouncementEditUrl } from '../../functions/builders/announcement/edit-url'
import { announcementIndexInitialStateParser } from '../../functions/parsers/announcement/initial-state/announcement/index'
import { announcementShowInitialStateParser } from '../../functions/parsers/announcement/initial-state/announcement/show'

export default [
  {
    url: ROOT_URLS[PL],
    lang: PL,
    track: ROOT_TRACK,
    title: ROOT_TITLES[PL],
    keywords: ROOT_KEYWORDS[PL],
    description: ROOT_DESCRIPTIONS[PL],
    initialStateParser: announcementIndexInitialStateParser
  },
  {
    url: ROOT_URLS[EN],
    lang: EN,
    track: ROOT_TRACK,
    title: ROOT_TITLES[EN],
    keywords: ROOT_KEYWORDS[EN],
    description: ROOT_DESCRIPTIONS[EN],
    initialStateParser: announcementIndexInitialStateParser
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[PL],
    title: VISITOR_PRIVACY_SETTINGS_TITLES[PL],
    track: VISITOR_PRIVACY_SETTINGS_TRACK,
    lang: PL
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[EN],
    title: VISITOR_PRIVACY_SETTINGS_TITLES[EN],
    track: VISITOR_PRIVACY_SETTINGS_TRACK,
    lang: EN
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[PL],
    title: VISITOR_COOKIES_POLICY_TITLES[PL],
    track: VISITOR_COOKIES_POLICY_TRACK,
    lang: PL
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[EN],
    title: VISITOR_COOKIES_POLICY_TITLES[EN],
    track: VISITOR_COOKIES_POLICY_TRACK,
    lang: EN
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[PL],
    title: VISITOR_PRIVACY_POLICY_TITLES[PL],
    track: VISITOR_PRIVACY_POLICY_TRACK,
    lang: PL
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[EN],
    title: VISITOR_PRIVACY_POLICY_TITLES[EN],
    track: VISITOR_PRIVACY_POLICY_TRACK,
    lang: EN
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[PL],
    title: VISITOR_TERMS_OF_SERVICE_TITLES[PL],
    track: VISITOR_TERMS_OF_SERVICE_TRACK,
    lang: PL
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[EN],
    title: VISITOR_TERMS_OF_SERVICE_TITLES[EN],
    track: VISITOR_TERMS_OF_SERVICE_TRACK,
    lang: EN
  },
  {
    url: VISITOR_CONTACT_URLS[PL],
    title: VISITOR_CONTACT_TITLES[PL],
    track: VISITOR_CONTACT_TRACK,
    lang: PL
  },
  {
    url: VISITOR_CONTACT_URLS[EN],
    title: VISITOR_CONTACT_TITLES[EN],
    track: VISITOR_CONTACT_TRACK,
    lang: EN
  },
  {
    url: PAGE_CREATE_URLS[PL],
    title: PAGE_CREATE_TITLES[PL],
    track: PAGE_CREATE_TRACK,
    lang: PL
  },
  {
    url: PAGE_CREATE_URLS[EN],
    title: PAGE_CREATE_TITLES[EN],
    track: PAGE_CREATE_TRACK,
    lang: EN
  },
  {
    url: PAGE_INDEX_MAP_URLS[PL],
    title: PAGE_INDEX_MAP_TITLES[PL],
    track: PAGE_INDEX_MAP_TRACK,
    lang: PL
  },
  {
    url: PAGE_INDEX_MAP_URLS[EN],
    title: PAGE_INDEX_MAP_TITLES[EN],
    track: PAGE_INDEX_MAP_TRACK,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_CREATE_URLS[PL],
    track: ANNOUNCEMENT_CREATE_TRACK,
    title: ANNOUNCEMENT_CREATE_TITLES[PL],
    keywords: ANNOUNCEMENT_CREATE_KEYWORDS[PL],
    description: ANNOUNCEMENT_CREATE_DESCRIPTIONS[PL],
    lang: PL
  },
  {
    url: ANNOUNCEMENT_CREATE_URLS[EN],
    track: ANNOUNCEMENT_CREATE_TRACK,
    title: ANNOUNCEMENT_CREATE_TITLES[EN],
    keywords: ANNOUNCEMENT_CREATE_DESCRIPTIONS[EN],
    lang: EN
  },
  {
    url: ANNOUNCEMENT_EDIT_URLS[PL],
    buildUrl: buildAnnouncementEditUrl,
    title: ANNOUNCEMENT_EDIT_TITLES[PL],
    track: ANNOUNCEMENT_EDIT_TRACK,
    lang: PL,
    withWildcards: true
  },
  {
    url: ANNOUNCEMENT_EDIT_URLS[EN],
    buildUrl: buildAnnouncementEditUrl,
    title: ANNOUNCEMENT_EDIT_TITLES[EN],
    track: ANNOUNCEMENT_EDIT_TRACK,
    lang: EN,
    withWildcards: true
  },
  {
    url: ANNOUNCEMENT_INDEX_CATALOGUE_URLS[PL],
    lang: PL,
    title: ANNOUNCEMENT_INDEX_CATALOGUE_TITLES[PL],
    track: ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
    keywords: ANNOUNCEMENT_INDEX_CATALOGUE_KEYWORDS[PL],
    description: ANNOUNCEMENT_INDEX_CATALOGUE_DESCRIPTIONS[PL],
    initialStateParser: announcementIndexInitialStateParser
  },
  {
    url: ANNOUNCEMENT_INDEX_CATALOGUE_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
    title: ANNOUNCEMENT_INDEX_CATALOGUE_TITLES[EN],
    keywords: ANNOUNCEMENT_INDEX_CATALOGUE_KEYWORDS[EN],
    description: ANNOUNCEMENT_INDEX_CATALOGUE_DESCRIPTIONS[EN],
    initialStateParser: announcementIndexInitialStateParser
  },
  {
    url: ANNOUNCEMENT_INDEX_MY_URLS[PL],
    title: ANNOUNCEMENT_INDEX_MY_TITLES[PL],
    track: ANNOUNCEMENT_INDEX_MY_TRACK,
    lang: PL
  },
  {
    url: ANNOUNCEMENT_INDEX_MY_URLS[EN],
    title: ANNOUNCEMENT_INDEX_MY_TITLES[EN],
    track: ANNOUNCEMENT_INDEX_MY_TRACK,
    lang: EN
  },
  {
    url: ANNOUNCEMENT_SHOW_URLS[PL],
    lang: PL,
    buildUrl: buildAnnouncementShowUrl,
    title: ANNOUNCEMENT_SHOW_TITLES[PL],
    track: ANNOUNCEMENT_SHOW_TRACK,
    withWildcards: true,
    initialStateParser: announcementShowInitialStateParser
  },
  {
    url: ANNOUNCEMENT_SHOW_URLS[EN],
    lang: EN,
    buildUrl: buildAnnouncementShowUrl,
    title: ANNOUNCEMENT_SHOW_TITLES[EN],
    track: ANNOUNCEMENT_SHOW_TRACK,
    withWildcards: true,
    initialStateParser: announcementShowInitialStateParser
  },
  {
    url: USER_CREATE_URLS[PL],
    title: USER_CREATE_TITLES[PL],
    track: USER_CREATE_TRACK,
    lang: PL
  },
  {
    url: USER_CREATE_URLS[EN],
    title: USER_CREATE_TITLES[EN],
    track: USER_CREATE_TRACK,
    lang: EN
  },
  {
    url: USER_AUTHORIZE_URLS[PL],
    title: USER_AUTHORIZE_TITLES[PL],
    track: USER_AUTHORIZE_TRACK,
    lang: PL
  },
  {
    url: USER_AUTHORIZE_URLS[EN],
    title: USER_AUTHORIZE_TITLES[EN],
    track: USER_AUTHORIZE_TRACK,
    lang: EN
  },
  {
    url: USER_RESET_PASSWORD_URLS[PL],
    title: USER_RESET_PASSWORD_TITLES[PL],
    track: USER_EDIT_PASSWORD_TRACK,
    lang: PL
  },
  {
    url: USER_RESET_PASSWORD_URLS[EN],
    title: USER_RESET_PASSWORD_TITLES[EN],
    track: USER_EDIT_PASSWORD_TRACK,
    lang: EN
  },
  {
    url: USER_EDIT_URLS[PL],
    title: USER_EDIT_TITLES[PL],
    track: USER_EDIT_TRACK,
    lang: PL
  },
  {
    url: USER_EDIT_URLS[EN],
    title: USER_EDIT_TITLES[EN],
    track: USER_EDIT_TRACK,
    lang: EN
  }
]
