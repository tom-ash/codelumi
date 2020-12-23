export const postRoutes = {
  showCreatePost: {
    sender: 'blog',
    pl: {
      url: '/dodaj-strone',
      regEx: /^\/?dodaj-strone\/?$/,
      title: 'Dodaj post',
      description: 'Dodaj post.'
    },
    en: {
      url: '/add-page',
      regEx: /^\/?add-page\/?$/,
      title: 'Add post',
      description: 'Add post.'
    },
    overshadow: false
  },
}
