import { PL, EN } from '../langs/langs'
import {
  ROOT_URLS,
  ANNOUNCEMENT_CREATE_URLS,
  PAGE_CREATE_URLS,
  PAGE_EDIT_URLS,
  PAGE_INDEX_MAP_URLS,
  PAGE_INDEX_MANAGE_URLS,
  VISITOR_PRIVACY_SETTINGS_URLS,
  VISITOR_COOKIES_POLICY_URLS,
  VISITOR_PRIVACY_POLICY_URLS,
  VISITOR_TERMS_OF_SERVICE_URLS,
  VISITOR_CONTACT_URLS
} from './urls'
import {
  ROOT_TRACK,
  ANNOUNCEMENT_CREATE_TRACK,
  PAGE_CREATE_TRACK,
  PAGE_EDIT_TRACK,
  PAGE_INDEX_MAP_TRACK,
  PAGE_INDEX_MANAGE_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_CONTACT_TRACK
} from '../tracks/tracks'

const DEFAULT_IMAGE_PL = ``

export default [
  {
    url: ROOT_URLS[PL],
    lang: PL,
    track: ROOT_TRACK,
    image: DEFAULT_IMAGE_PL,
    pageName: 'root'
  },
  {
    url: ROOT_URLS[EN],
    lang: EN,
    track: ROOT_TRACK,
    image: DEFAULT_IMAGE_PL,
    pageName: 'root'
  },
  {
    url: ANNOUNCEMENT_CREATE_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_CREATE_TRACK
  },
  {
    url: ANNOUNCEMENT_CREATE_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_CREATE_TRACK
  },
  {
    url: PAGE_CREATE_URLS[PL],
    lang: PL,
    track: PAGE_CREATE_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_CREATE_URLS[EN],
    lang: EN,
    track: PAGE_CREATE_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_EDIT_URLS[PL],
    lang: PL,
    track: PAGE_EDIT_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_EDIT_URLS[EN],
    lang: EN,
    track: PAGE_EDIT_TRACK,
    image: DEFAULT_IMAGE_PL,
  },
  {
    url: PAGE_INDEX_MAP_URLS[PL],
    lang: PL,
    track: PAGE_INDEX_MAP_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_INDEX_MAP_URLS[EN],
    lang: EN,
    track: PAGE_INDEX_MAP_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_INDEX_MANAGE_URLS[PL],
    lang: PL,
    track: PAGE_INDEX_MANAGE_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_INDEX_MANAGE_URLS[EN],
    lang: EN,
    track: PAGE_INDEX_MANAGE_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[PL],
    lang: PL,
    track: VISITOR_PRIVACY_SETTINGS_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[EN],
    lang: EN,
    track: VISITOR_PRIVACY_SETTINGS_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[PL],
    lang: PL,
    track: VISITOR_COOKIES_POLICY_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[EN],
    lang: EN,
    track: VISITOR_COOKIES_POLICY_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[PL],
    lang: PL,
    track: VISITOR_PRIVACY_POLICY_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[EN],
    lang: EN,
    track: VISITOR_PRIVACY_POLICY_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[PL],
    lang: PL,
    track: VISITOR_TERMS_OF_SERVICE_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[EN],
    lang: EN,
    track: VISITOR_TERMS_OF_SERVICE_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_CONTACT_URLS[PL],
    lang: PL,
    track: VISITOR_CONTACT_TRACK,
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_CONTACT_URLS[EN],
    lang: EN,
    track: VISITOR_CONTACT_TRACK,
    image: DEFAULT_IMAGE_PL
  }
]
