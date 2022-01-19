import APEX_DOMAIN from "../../shared/constants/domains/apex"
import ROOT_DOMAIN from "../../shared/constants/domains/root"

export const allowedOrigins = [
  `https://${ROOT_DOMAIN}`,
  `http://local.${APEX_DOMAIN}:8080`,
  'https://mapawynajmu.pl',
  'http://local.mapawynajmu.pl:8080'
]

// export const allowedOrigins = [
//   `https://${ROOT_DOMAIN}`,
//   `http://local.${APEX_DOMAIN}:8080`
// ]
