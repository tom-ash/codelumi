import React from 'react'
import {
  ROOT_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
} from '../../../../../../../../../../shared/constants/tracks/tracks'

export function buttonManager() {
  const { renderCatalogue } = this.props

  return {
    classNames: { container: 'button' },
    label: (
      <>
        {renderCatalogue ?
        this.languageHandler({ pl: 'Katalog', en: 'Catalogue' })
        : this.languageHandler({ pl: 'Mapa', en: 'Map' })
        }
      </>
    ),
    onClick: () => this.changeRoute(renderCatalogue ? ROOT_TRACK : ANNOUNCEMENT_INDEX_CATALOGUE_TRACK)
  }
}
