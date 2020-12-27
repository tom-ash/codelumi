export const coreIndexRoutes = {
  showAnnouncementIndexMap: {
    sender: 'map',
    pl: {
      regEx: /(^\/?mapa-nieruchomosci-na-wynajem-warszawa\/?)|(^\/?)$/,
      url: '/',
      title: 'Mapa nieruchomości na wynajem w Warszawie - Mieszkania, biura i lokale użytkowe',
      description: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na mapie. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.'
    },
    en: {
      regEx: /(^\/?map-of-real-estates-for-lease-warsaw\/?)|(^\/?)$/,
      url: '/',
      title: 'Map of Real Estates for Lease in Warsaw - Apartments, Offices and Usable premises',
      description: 'Free announcements of real estate lease in Warsaw on the map. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
    }
  },
  showAnnouncementIndexCatalogue: {
    sender: 'list',
    pl: {
      regEx: /^\/?katalog-nieruchomosci-na-wynajem-warszawa\/?$/,
      url: '/katalog-nieruchomosci-na-wynajem-warszawa',
      title: 'Katalog nieruchomości na wynajem w Warszawie - Mieszkania, biura i lokale użytkowe',
      description: 'Bezpłatne ogłoszenia nieruchomości na wynajem w Warszawie na liście. Przeglądaj i dodawaj darmowe ogłoszenia wynajmu w kategorii: mieszkanie, biuro, lokal użytkowy.'
    },
    en: {
      regEx: /^\/?catalogue-of-real-estates-for-lease-warsaw\/?$/,
      url: '/catalogue-of-real-estates-for-lease-warsaw',
      title: 'Catalogue of Real Estates for Lease in Warsaw - Apartments, offices and usable premises',
      description: 'Free announcements of real estate lease in Warsaw on the list. Search and add free announcements of lease in the categories: apartment, office, usable premises.'
    }
  },
  showAnnouncementShow: {
    sender: 'announcement',
    pl: {
      regEx: /^\/?\d+-.*-na-wynajem-warszawa-.*$/
    },
    en: {
      regEx: /^\/?\d+-.*-for-lease-warsaw-.*$/
    },
    overshadow: false
  },  
  showAnnouncementCreate: {
    sender: 'announcementCreate',
    pl: {
      regEx: /^\/?dodaj-ogloszenie-wynajmu-nieruchomosci-w-warszawie\/?$/,
      url: '/dodaj-ogloszenie-wynajmu-nieruchomosci-w-warszawie',
      title: 'Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy, biuro',
      description: 'Dodaj darmowe ogłoszenie wynajmu nieruchomości w Warszawie w kategorii: mieszkanie, lokal użytkowy lub biuro.',
      label: 'Dodaj bezpłatne ogłoszenie'
    },
    en: {
      regEx: /^\/?add-announcement-of-real-estate-lease-in-warsaw\/?$/,
      url: '/add-announcement-of-real-estate-lease-in-warsaw',
      title: 'Add Free Announcement of Lease of Real Estate in Warsaw in the category: Apartment, Usable premises, Office',
      description: 'Add free announcement of lease of real estate in Warsaw in the category: Apartment, Usable premises, Office.',
      label: 'Add Free Announcement'
    },
    overshadow: false
  },
  showSiteMap: {
    sender: 'siteMap',
    pl: {
      regEx: /^\/?mapa-strony\/?$/,
      url: '/mapa-strony',
      title: 'Mapa strony warsawlease.pl',
      description: 'Mapa strony warsawlease.pl',
      label: 'Mapa strony warsawlease.pl'
    },
    en: {
      regEx: /^\/?site-map\/?$/,
      url: '/site-map',
      title: 'Site Map warsawlease.pl',
      description: 'Site Map warsawlease.pl',
      label: 'Site Map warsawlease.pl'
    },
    overshadow: false
  }
}
