import React from 'react'

export function buttonManager(action) {
  const {
    renderMap
  } = this.props

  return {
    classNames: { container: 'form-input button' },
    // href: this.languageObjectHandler({ pl: `${CLIENT_URL}${pl.url}`, en: `${CLIENT_URL}${en.url}` }),
    label: (
      <>
        {renderMap ?
            this.languageHandler({ pl: 'Mapa', en: 'Map' }) :
            this.languageHandler({ pl: 'Katalog', en: 'Catalogue' })
        }
      </>
    ),
    // onClick: () => {
    //   changeApp({
    //     showAnnouncementIndexMap: !showAnnouncementIndexMap,
    //     showAnnouncementIndexCatalogue: !showAnnouncementIndexCatalogue
    //   })
    // }
  }
}
