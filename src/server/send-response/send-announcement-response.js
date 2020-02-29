const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { showClientServerParams } from '../../app/components/announcement/constants/client-server-params'

export function sendAnnouncementResponse({ res, initialState: { route: { language } }, announcementId }) {
  fetch(`${API_URL}/announcements/${announcementId}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    let clientParams = {}
    
    showClientServerParams.map(param => ( clientParams[param.client] = json[param.server] ))

    clientParams.mapLatitude = json.latitude
    clientParams.mapLongitude = json.longitude
    clientParams.name = json.name
    clientParams.features = json.features
    clientParams.furnishings = json.furnishings
    clientParams.descriptionPolish = json.polishDescription
    clientParams.descriptionEnglish = json.englishDescription

    sendResponse({
      res,
      initialState: {
        route: {
          showAnnouncementShow: true,
          language
        },
        announcement: clientParams
      },
      title: titleProvider({ ...clientParams, language })
    })
  })
  .catch(() => res.status(404).send('404'))
}

function titleProvider({ category, district, area, language }) {
  return `${parseCategory(category)[language]}, ${districtParser(district)}, ${area} m2 | warsawlease.pl`
}

function parseCategory(categoryNumber) {
  switch (categoryNumber) {
    case 0: return { pl: 'Biuro', en: 'Office' }
    case 1: return { pl: 'Lokal użytkowy', en: 'Usable Premises' }
    case 2: return { pl: 'Mieszkanie', en: 'Apartment' }
    default: break
  }
}

function districtParser(districtValue) {
  return districts.find(district => district.value === districtValue).text
}

const districts = [
  { text: 'Bemowo', url: 'bemowo', value: 0 },
  { text: 'Białołęka', url: 'bialoleka', value: 1 },
  { text: 'Bielany', url: 'bielany', value: 2 },
  { text: 'Mokotów', url: 'mokotow', value: 3 },
  { text: 'Ochota', url: 'ochota', value: 4 },
  { text: 'Praga Południe', url: 'praga_poludnie', value: 5 },
  { text: 'Praga-Północ', url: 'praga_polnoc', value: 6 },
  { text: 'Rembertów', url: 'rembertow', value: 7 },
  { text: 'Śródmieście', url: 'srodmiescie', value: 8 },
  { text: 'Targówek', url: 'targowek', value: 9 },
  { text: 'Ursus', url: 'ursus', value: 10 },
  { text: 'Ursynów', url: 'ursynow', value: 11 },
  { text: 'Wawer', url: 'wawer', value: 12 },
  { text: 'Wesoła', url: 'wesola', value: 13 },
  { text: 'Wilanów', url: 'wilanow', value: 14 },
  { text: 'Włochy', url: 'wlochy', value: 15 },
  { text: 'Wola', url: 'wola', value: 16 },
  { text: 'Żoliborz', url: 'zoliborz', value: 17 } 
]
