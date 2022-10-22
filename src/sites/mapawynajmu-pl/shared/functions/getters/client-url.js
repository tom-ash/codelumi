import APEX_DOMAIN from '../../constants/domains/apex'
import ROOT_DOMAIN from '../../constants/domains/root'

function getClientUrl() {
  switch (APP_ENV) {
    case 'production':
      return `https://${ROOT_DOMAIN}`
    case 'development':
      return `http://local.${APEX_DOMAIN}:8080`
    default:
      return ''
  }
}

export default getClientUrl
