export const postRoutes = {
  showCreatePost: {
    sender: 'blog',
    pl: {
      url: '/dodaj-post',
      regEx: /^\/?dodaj-post\/?$/,
      title: 'Dodaj post',
      description: 'Dodaj post.'
    },
    en: {
      url: '/add-post',
      regEx: /^\/?add-post\/?$/,
      title: 'Add post',
      description: 'Add post.'
    },
    overshadow: false
  },
}
