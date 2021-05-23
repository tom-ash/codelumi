import React from 'react'
import routes from '../../../../../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../../../../../shared/constants/urls/client.js'
import getRouteByRender from '../../../../../../../../../../../shared/app/functions/routes/getters/route-by-render.js'

export function buttonManager() {
  const { changeRoute } = this.context
  const { render, lang, renderCatalogue } = this.props
  const { relatedToUrl: url } = getRouteByRender({ routes, render, lang })
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
