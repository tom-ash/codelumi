import React from 'react'
import { ROOT_TRACK, ANNOUNCEMENT_INDEX_CATALOGUE_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'
import getRouteByTrack from '../../../../../../../../../../../shared/app/functions/routes/getters/route-by-track.js'
import routes from '../../../../../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../../../../../shared/constants/urls/client.js'

export function buttonManager() {
  const { changeRoute } = this.context
  const { renderCatalogue } = this.props
  const track = renderCatalogue ? ROOT_TRACK : ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
  const route = getRouteByTrack({ track, routes })
  const { url } = route
  const href = `${CLIENT_URL}/${url === '/' ? '' : url}`

  return {
    classNames: { container: 'button' },
    label: (
      <>
        {renderCatalogue ?
        this.langHandler({ pl: 'Mapa', en: 'Map' })
        : this.langHandler({ pl: 'Katalog', en: 'Catalogue' })
        }
      </>
    ),
    onClick: () => changeRoute({ href })
  }
}
