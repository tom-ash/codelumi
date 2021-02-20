function pageEditInitialStateParser({ pageCreate }) {
  const { name, langVerUrls } = pageCreate
  const body = JSON.stringify(pageCreate.body, null, 2)
  const meta = JSON.stringify(pageCreate.meta, null, 2)

  return {
    page: {
      edit: {
        data: {
          name,
          langVerUrls
        },
        inputs: {
          ...pageCreate,
          body,
          meta
        }
      }
    }
  }
}

export default pageEditInitialStateParser
