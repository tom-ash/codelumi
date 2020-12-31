import React from 'react'
import {
  ROOT_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
} from '../../../../../../../../../../shared/constants/tracks/tracks'

export function buttonManager(action) {
  const {
    renderMap
  } = this.props

  return {
    classNames: { container: 'button' },
    // href: this.languageObjectHandler({ pl: `${CLIENT_URL}${pl.url}`, en: `${CLIENT_URL}${en.url}` }),
    label: (
      <>
        {renderMap ?
          this.languageHandler({ pl: 'Mapa', en: 'Map' }) :
          this.languageHandler({ pl: 'Katalog', en: 'Catalogue' })
        }
      </>
    ),
    onClick: () => this.changeRoute(renderMap ? ANNOUNCEMENT_INDEX_CATALOGUE_TRACK : ROOT_TRACK)
  }
}
