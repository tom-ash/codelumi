import buildAnnouncementShowUrl from '../../functions/builders/announcement/show-url'
import buildAnnouncementEditUrl from '../../functions/builders/announcement/edit-url'
import buildPageEditUrl from '../../../../shared/app/components/page/components/edit/functions/build-page-edit-url.js'
import pageEditStateParser from '../../../../shared/app/components/page/components/edit/functions/initial-state-parser.js'
import pageEditStateSetter from '../../../../shared/app/components/page/components/edit/functions/state-setter.js'
import announcementShowTitleParser from '../../functions/parsers/meta-data/announcement/show/title'
import announcementShowDescriptionParser from '../../functions/parsers/meta-data/announcement/show/description'
import announcementShowKeywordsParser from '../../functions/parsers/meta-data/announcement/show/keywords'
import announcementShowMetaDataImageParser from '../../functions/parsers/meta-data/announcement/show/image'

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
  PAGE_EDIT_URLS,
  PAGE_INDEX_MAP_URLS,
  PAGE_INDEX_MANAGE_URLS,
  ANNOUNCEMENT_CREATE_FORM_URLS,
  ANNOUNCEMENT_CREATE_VERIFICATION_URLS,
  ANNOUNCEMENT_CREATE_SUCCESS_URLS,
  ANNOUNCEMENT_EDIT_URLS,
  ANNOUNCEMENT_INDEX_CATALOGUE_URLS,
  ANNOUNCEMENT_INDEX_MY_URLS,
  ANNOUNCEMENT_SHOW_URLS,
  USER_CREATE_FORM_URLS,
  USER_CREATE_VERIFICATION_URLS,
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
  PAGE_EDIT_TRACK,
  PAGE_INDEX_MAP_TRACK,
  PAGE_INDEX_MANAGE_TRACK,
  ANNOUNCEMENT_CREATE_FORM_TRACK,
  ANNOUNCEMENT_CREATE_SUCCESS_TRACK,
  ANNOUNCEMENT_CREATE_EDIT_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK,
  ANNOUNCEMENT_SHOW_TRACK,
  USER_CREATE_FORM_TRACK,
  USER_CREATE_VERIFICATION_TRACK,
  USER_EDIT_TRACK,
  USER_EDIT_PASSWORD_TRACK,
  USER_AUTHORIZE_TRACK,
  ANNOUNCEMENT_CREATE_VERIFICATION_TRACK
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
  PAGE_INDEX_MANAGE_TITLES,
  ANNOUNCEMENT_CREATE_TITLES,
  ANNOUNCEMENT_EDIT_TITLES,
  ANNOUNCEMENT_INDEX_CATALOGUE_TITLES,
  ANNOUNCEMENT_INDEX_MY_TITLES,
  USER_CREATE_FORM_TITLES,
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

const DEFAULT_IMAGE_PL = 'https://warsawlease.s3.eu-central-1.amazonaws.com/assets/mapa-wynajmu-nieruchomosci-w-warszawie.png'

export default [
  {
    url: ROOT_URLS[PL],
    lang: PL,
    track: ROOT_TRACK,
    title: ROOT_TITLES[PL],
    keywords: ROOT_KEYWORDS[PL],
    description: ROOT_DESCRIPTIONS[PL],
    image: DEFAULT_IMAGE_PL,
    pageName: 'welcome'
  },
  {
    url: ROOT_URLS[EN],
    lang: EN,
    track: ROOT_TRACK,
    title: ROOT_TITLES[EN],
    keywords: ROOT_KEYWORDS[EN],
    description: ROOT_DESCRIPTIONS[EN],
    image: DEFAULT_IMAGE_PL,
    pageName: 'welcome'
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[PL],
    lang: PL,
    track: VISITOR_PRIVACY_SETTINGS_TRACK,
    title: VISITOR_PRIVACY_SETTINGS_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_SETTINGS_URLS[EN],
    lang: EN,
    track: VISITOR_PRIVACY_SETTINGS_TRACK,
    title: VISITOR_PRIVACY_SETTINGS_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[PL],
    lang: PL,
    track: VISITOR_COOKIES_POLICY_TRACK,
    title: VISITOR_COOKIES_POLICY_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_COOKIES_POLICY_URLS[EN],
    lang: EN,
    track: VISITOR_COOKIES_POLICY_TRACK,
    title: VISITOR_COOKIES_POLICY_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[PL],
    lang: PL,
    track: VISITOR_PRIVACY_POLICY_TRACK,
    title: VISITOR_PRIVACY_POLICY_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_PRIVACY_POLICY_URLS[EN],
    lang: EN,
    track: VISITOR_PRIVACY_POLICY_TRACK,
    title: VISITOR_PRIVACY_POLICY_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[PL],
    lang: PL,
    track: VISITOR_TERMS_OF_SERVICE_TRACK,
    title: VISITOR_TERMS_OF_SERVICE_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_TERMS_OF_SERVICE_URLS[EN],
    lang: EN,
    track: VISITOR_TERMS_OF_SERVICE_TRACK,
    title: VISITOR_TERMS_OF_SERVICE_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_CONTACT_URLS[PL],
    lang: PL,
    track: VISITOR_CONTACT_TRACK,
    title: VISITOR_CONTACT_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: VISITOR_CONTACT_URLS[EN],
    lang: EN,
    track: VISITOR_CONTACT_TRACK,
    title: VISITOR_CONTACT_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_CREATE_URLS[PL],
    lang: PL,
    track: PAGE_CREATE_TRACK,
    title: PAGE_CREATE_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_CREATE_URLS[EN],
    lang: EN,
    track: PAGE_CREATE_TRACK,
    title: PAGE_CREATE_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_EDIT_URLS[PL],
    lang: PL,
    track: PAGE_EDIT_TRACK,
    title: PAGE_CREATE_TITLES[PL],
    image: DEFAULT_IMAGE_PL,
    initialStateParser: pageEditStateParser,
    stateSetter: pageEditStateSetter,
    urlBuilder: buildPageEditUrl
  },
  {
    url: PAGE_EDIT_URLS[EN],
    lang: EN,
    track: PAGE_EDIT_TRACK,
    title: PAGE_CREATE_TITLES[EN],
    image: DEFAULT_IMAGE_PL,
    initialStateParser: pageEditStateParser,
    stateSetter: pageEditStateSetter,
    urlBuilder: buildPageEditUrl
  },
  {
    url: PAGE_INDEX_MAP_URLS[PL],
    lang: PL,
    track: PAGE_INDEX_MAP_TRACK,
    title: PAGE_INDEX_MAP_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_INDEX_MAP_URLS[EN],
    lang: EN,
    track: PAGE_INDEX_MAP_TRACK,
    title: PAGE_INDEX_MAP_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_INDEX_MANAGE_URLS[PL],
    lang: PL,
    track: PAGE_INDEX_MANAGE_TRACK,
    title: PAGE_INDEX_MANAGE_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: PAGE_INDEX_MANAGE_URLS[EN],
    lang: EN,
    track: PAGE_INDEX_MANAGE_TRACK,
    title: PAGE_INDEX_MANAGE_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: ANNOUNCEMENT_CREATE_FORM_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_CREATE_FORM_TRACK,
    title: ANNOUNCEMENT_CREATE_TITLES[PL],
    keywords: ANNOUNCEMENT_CREATE_KEYWORDS[PL],
    description: ANNOUNCEMENT_CREATE_DESCRIPTIONS[PL],
    image: DEFAULT_IMAGE_PL,
    pageName: 'create_announcement'
  },
  {
    url: ANNOUNCEMENT_CREATE_FORM_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_CREATE_FORM_TRACK,
    title: ANNOUNCEMENT_CREATE_TITLES[EN],
    keywords: ANNOUNCEMENT_CREATE_DESCRIPTIONS[EN],
    image: DEFAULT_IMAGE_PL,
    pageName: 'create_announcement'
  },
  {
    url: ANNOUNCEMENT_CREATE_VERIFICATION_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_CREATE_VERIFICATION_TRACK,
  },
  {
    url: ANNOUNCEMENT_CREATE_VERIFICATION_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_CREATE_VERIFICATION_TRACK,
  },
  {
    url: ANNOUNCEMENT_CREATE_SUCCESS_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_CREATE_SUCCESS_TRACK,
  },
  {
    url: ANNOUNCEMENT_CREATE_SUCCESS_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_CREATE_SUCCESS_TRACK,
  },
  {
    url: ANNOUNCEMENT_EDIT_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_CREATE_EDIT_TRACK,
    urlBuilder: buildAnnouncementEditUrl,
    title: ANNOUNCEMENT_EDIT_TITLES[PL],
    image: DEFAULT_IMAGE_PL,
    // stateSetter: state => console.log(state),
  },
  {
    url: ANNOUNCEMENT_EDIT_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_CREATE_EDIT_TRACK,
    urlBuilder: buildAnnouncementEditUrl,
    title: ANNOUNCEMENT_EDIT_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: ANNOUNCEMENT_INDEX_CATALOGUE_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
    title: ANNOUNCEMENT_INDEX_CATALOGUE_TITLES[PL],
    keywords: ANNOUNCEMENT_INDEX_CATALOGUE_KEYWORDS[PL],
    description: ANNOUNCEMENT_INDEX_CATALOGUE_DESCRIPTIONS[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: ANNOUNCEMENT_INDEX_CATALOGUE_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
    title: ANNOUNCEMENT_INDEX_CATALOGUE_TITLES[EN],
    keywords: ANNOUNCEMENT_INDEX_CATALOGUE_KEYWORDS[EN],
    description: ANNOUNCEMENT_INDEX_CATALOGUE_DESCRIPTIONS[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: ANNOUNCEMENT_INDEX_MY_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_INDEX_MY_TRACK,
    title: ANNOUNCEMENT_INDEX_MY_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: ANNOUNCEMENT_INDEX_MY_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_INDEX_MY_TRACK,
    title: ANNOUNCEMENT_INDEX_MY_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: ANNOUNCEMENT_SHOW_URLS[PL],
    lang: PL,
    track: ANNOUNCEMENT_SHOW_TRACK,
    needsDataInitialization: true,
    urlBuilder: buildAnnouncementShowUrl,
    titleParser: announcementShowTitleParser,
    descriptionParser: announcementShowDescriptionParser,
    keywordsParser: announcementShowKeywordsParser,
    imageParser: announcementShowMetaDataImageParser
  },
  {
    url: ANNOUNCEMENT_SHOW_URLS[EN],
    lang: EN,
    track: ANNOUNCEMENT_SHOW_TRACK,
    needsDataInitialization: true,
    urlBuilder: buildAnnouncementShowUrl,
    titleParser: announcementShowTitleParser,
    descriptionParser: announcementShowDescriptionParser,
    keywordsParser: announcementShowKeywordsParser,
    imageParser: announcementShowMetaDataImageParser
  },
  {
    url: USER_CREATE_FORM_URLS[PL],
    lang: PL,
    track: USER_CREATE_FORM_TRACK,
    title: USER_CREATE_FORM_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_CREATE_FORM_URLS[EN],
    lang: EN,
    track: USER_CREATE_FORM_TRACK,
    title: USER_CREATE_FORM_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_CREATE_VERIFICATION_URLS[PL],
    lang: PL,
    track: USER_CREATE_VERIFICATION_TRACK,
    // title: USER_CREATE_FORM_TITLES[PL],
    // image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_CREATE_VERIFICATION_URLS[EN],
    lang: EN,
    track: USER_CREATE_VERIFICATION_TRACK,
    // title: USER_CREATE_FORM_TITLES[EN],
    // image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_AUTHORIZE_URLS[PL],
    lang: PL,
    track: USER_AUTHORIZE_TRACK,
    title: USER_AUTHORIZE_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_AUTHORIZE_URLS[EN],
    lang: EN,
    track: USER_AUTHORIZE_TRACK,
    title: USER_AUTHORIZE_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_RESET_PASSWORD_URLS[PL],
    lang: PL,
    track: USER_EDIT_PASSWORD_TRACK,
    title: USER_RESET_PASSWORD_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_RESET_PASSWORD_URLS[EN],
    lang: EN,
    track: USER_EDIT_PASSWORD_TRACK,
    title: USER_RESET_PASSWORD_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_EDIT_URLS[PL],
    lang: PL,
    track: USER_EDIT_TRACK,
    title: USER_EDIT_TITLES[PL],
    image: DEFAULT_IMAGE_PL
  },
  {
    url: USER_EDIT_URLS[EN],
    lang: EN,
    track: USER_EDIT_TRACK,
    title: USER_EDIT_TITLES[EN],
    image: DEFAULT_IMAGE_PL
  }
]
