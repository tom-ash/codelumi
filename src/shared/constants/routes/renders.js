import {
  ROOT,
  VISITOR,
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_POLICY,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_CONTACT,
  PAGE,
  PAGE_CREATE,
  PAGE_INDEX_MAP,
  PAGE_SHOW,
  ANNOUNCEMENT,
  ANNOUNCEMENT_CREATE,
  ANNOUNCEMENT_INDEX_MAP,
  ANNOUNCEMENT_INDEX_CATALOGUE,
  ANNOUNCEMENT_INDEX_MY,
  USER,
  USER_CREATE,
  USER_AUTHORIZE,
  USER_RESET_PASSWORD,
  USER_EDIT,
  USER_SHOW
} from '../tracks/tracks'

export default {
  [ROOT]: {
    [VISITOR]: true,
    [ANNOUNCEMENT]: true,
    [ANNOUNCEMENT_INDEX_MAP]: true,
    [PAGE]: true,
    [PAGE_SHOW]: true
  },
  [VISITOR_PRIVACY_SETTINGS]: {
    [VISITOR]: true
  },
  [VISITOR_COOKIES_POLICY]: {
    [VISITOR]: true
  },
  [VISITOR_PRIVACY_POLICY]: {
    [VISITOR]: true
  },
  [VISITOR_TERMS_OF_SERVICE]: {
    [VISITOR]: true
  },
  [VISITOR_CONTACT]: {
    [VISITOR]: true
  },
  [PAGE_CREATE]: {
    [VISITOR]: true,
    [PAGE]: true
  },
  [PAGE_INDEX_MAP]: {
    [VISITOR]: true,
    [PAGE]: true
  },
  [PAGE_SHOW]: {
    [VISITOR]: true,
    [PAGE]: true
  },
  [ANNOUNCEMENT_CREATE]: {
    [VISITOR]: true,
    [ANNOUNCEMENT]: true
  },
  [ANNOUNCEMENT_INDEX_MAP]: {
    [VISITOR]: true,
    [ANNOUNCEMENT]: true
  },
  [ANNOUNCEMENT_INDEX_CATALOGUE]: {
    [VISITOR]: true,
    [ANNOUNCEMENT]: true
  },
  [ANNOUNCEMENT_INDEX_MY]: {
    [VISITOR]: true,
    [ANNOUNCEMENT]: true
  },
  [USER_CREATE]: {
    [VISITOR]: true,
    [USER]: true
  },
  [USER_AUTHORIZE]: {
    [VISITOR]: true,
    [USER]: true
  },
  [USER_RESET_PASSWORD]: {
    [VISITOR]: true,
    [USER]: true
  },
  [USER_EDIT]: {
    [VISITOR]: true,
    [USER]: true
  },
  [USER_SHOW]: {
    [VISITOR]: true,
    [USER]: true
  }
}
