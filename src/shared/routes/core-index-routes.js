export const coreIndexRoutes = {
  showAnnouncementIndexMap: {
    sender: 'map',
    pl: {
      regEx: /^\/?$/,
      url: '/',
      title: 'Ogłoszenia nieruchomości na wynajem - Warszawa - Mapa - Mieszkania, biura i lokale użytkowe',
      description: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na mapie. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.'
    },
    en: {
      regEx: /^\/?$/,
      url: '/',
      title: 'Announcements of Real Estate Lease - Warsaw - Map - Apartments, Offices and Usable premises',
      description: 'Free announcements of real estate lease in Warsaw on the map. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
    },
    overshadow: false
  },
  showAnnouncementIndexList: {
    sender: 'list',
    pl: {
      regEx: /^\/?lista\/?$/,
      url: '/lista',
      title: 'Ogłoszenia nieruchomości na wynajem - Warszawa - Lista - Mieszkania, biura i lokale użytkowe',
      description: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na liście. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.'
    },
    en: {
      regEx: /^\/?list\/?$/,
      url: '/list',
      title: 'Announcements of Real Estate Lease - Warsaw - List - Apartments, offices and usable premises',
      description: 'Free announcements of real estate lease in Warsaw on the list. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true
  },
  showAnnouncementShow: {
    sender: 'announcement',
    pl: { regEx: /^\/?\d+$/ },
    en: { regEx: /^\/?\d+$/ },
    overshadow: false
  },  
  showAnnouncementCreate: {
    sender: 'generic',
    pl: {
      regEx: /^\/?dodaj-ogloszenie\/?$/,
      url: '/dodaj-ogloszenie',
      title: 'Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy, biuro',
      description: 'Dodaj darmowe ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy lub biuro.'
    },
    en: {
      regEx: /^\/?add-announcement\/?$/,
      url: '/add-announcement',
      title: 'Add Free Announcement of Lease of Real Estate in Warsaw in the category: Apartment, Usable premises, Office',
      description: 'Add free announcement of lease of real estate in Warsaw in the category: Apartment, Usable premises, Office.'
    },
    overshadow: false
  }
}
