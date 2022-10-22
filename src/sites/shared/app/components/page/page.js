import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const PageShow = loadable(() => import('./components/show/show'))
const PageEdit = loadable(() => import('./components/edit/edit'))
const PageIndex = loadable(() => import('./components/index/index'))
const PageNotFound = loadable(() => import('./components/not-found/not-found'))

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      appName,
      links,
      clientUrl,
      apiUrl,
      renderEdit,
      renderShow,
      renderIndex,
      renderNotFound,
      device,
      changeRoute,
      buildUrl,
      langHandler,
    } = this.props
    const showProps = { appName, links, clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const editProps = { appName, links, clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const indexProps = { clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const pageNotFoundProps = { clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }

    return (
      <>
        {renderShow && <PageShow {...showProps} />}
        {renderEdit && <PageEdit {...editProps} />}
        {renderIndex && <PageIndex {...indexProps} />}
        {renderNotFound && <PageNotFound {...pageNotFoundProps} />}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
