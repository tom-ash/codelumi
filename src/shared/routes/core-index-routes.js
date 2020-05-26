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
    },
    overshadow: false
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
    },
    needsAnnouncementIndexMap: true,
    overshadow: true
  },
  showAnnouncementShow: {
    sender: 'announcement',
    pl: {
      regEx: /^\/?nieruchomosc-wynajem-warszawa-.*-.*-nr-\d+$/
    },
    en: {
      regEx: /^\/?real-estate-lease-warsaw-.*-.*-no-\d+$/
    },
    overshadow: false
  },  
  showAnnouncementCreate: {
    sender: 'generic',
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
  }
}
