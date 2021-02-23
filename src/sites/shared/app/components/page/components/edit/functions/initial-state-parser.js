function pageEditStateParser({ 'page/edit': pageEdit }) {
  const { name, langVerUrls } = pageEdit
  const body = JSON.stringify(pageEdit.body, null, 2)
  const meta = JSON.stringify(pageEdit.meta, null, 2)

  return {
    page: {
      edit: {
        data: {
          name,
          langVerUrls
        },
        inputs: {
          ...pageEdit,
          body,
          meta
        }
      }
    }
  }
}

export default pageEditStateParser
