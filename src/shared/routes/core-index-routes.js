const genericDescription = {
  pl: 'Masz nieruchomość na wynajem w Warszawie? Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura. Dodane ogłoszenia prezentowane są na mapie oraz na liście. Mapa ogłoszeń umożliwia precyzyjne wyszukiwanie w oparciu o wybranę lokalizację, a lista szybkie przeglądanie zdjęć.',
  en: 'Do you have a real estate to lease in Warsaw? On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office. The added announcements are presented on the map and on the list. The announcement map allows for precise search based on the selected location and the list allows for quick picture browsing.'
}

export const coreIndexRoutes = {
  showAnnouncementIndexMap: {
    sender: 'map',
    pl: {
      regEx: /^\/?$/,
      url: '/',
      title: 'Mapa nieruchomości na wynajem, Warszawa - Mieszkania, lokale użytkowe i biura do wynajęcia w Warszawie',
      description: genericDescription.pl
    },
    en: {
      regEx: /^\/?$/,
      url: '/',
      title: 'Map of Real Estates for Lease, Warsaw - Apartments, Usable Premises and Offices for Lease in Warsaw',
      description: genericDescription.en
    },
    overshadow: false
  },
  showAnnouncementIndexList: {
    sender: 'list',
    pl: {
      regEx: /^\/?lista\/?$/,
      url: '/lista',
      title: 'Lista nieruchomości na wynajem, Warszawa - Mieszkania, lokale użytkowe i biura do wynajęcia w Warszawie',
      description: genericDescription.pl
    },
    en: {
      regEx: /^\/?list\/?$/,
      url: '/list',
      title: 'List of Real Estates for Lease, Warsaw - Apartments, Usable Premises and Offices for Lease in Warsaw',
      description: genericDescription.en
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
      title: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości w Warszawie',
      description: genericDescription.pl
    },
    en: {
      regEx: /^\/?add-announcement\/?$/,
      url: '/add-announcement',
      title: 'Add Free Announcement of Real Estate Lease in Warsaw',
      description: genericDescription.en
    },
    overshadow: false
  }
}
