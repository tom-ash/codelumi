export const blogRoutes = {
  showBlog: {
    sender: 'blog',
    pl: {
      url: '/blog',
      regEx: /^\/?blog\/?$/,
      title: 'Artykuły o wynajmie nieruchomości w Warszawie',
      description: 'Artykuły o wynajmie nieruchomości w Warszawie'
    },
    en: {
      url: '/blog',
      regEx: /^\/?blog\/?$/,
      title: 'Articles on real estate lease in Warsaw',
      description: 'Articles on real estate lease announcements in Warsaw'
    },
    overshadow: false
  },
  showBlogHowToWriteApartmentLeaseAnnouncement: {
    sender: 'blog',
    pl: {
      url: '/jak-napisac-ogloszenie-wynajmu-mieszkania',
      regEx: /^\/?jak-napisac-ogloszenie-wynajmu-mieszkania\/?$/,
      title: 'Blog',
      description: 'Artykuły o wynajmie nieruchomości w Warszawie'
    },
    en: {
      url: '/how-to-write-apartment-lease-announcement',
      regEx: /^\/?how-to-write-apartment-lease-announcement\/?$/,
      title: 'Blog',
      description: 'Articles on real estate lease announcements in Warsaw'
    },
    overshadow: false
  },
}
