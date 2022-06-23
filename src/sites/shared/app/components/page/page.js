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
    const { appName, customMetaParser, links, clientUrl, apiUrl, renderEdit, renderShow, renderIndex, renderNotFound, device, changeRoute, buildUrl, langHandler } = this.props
    const showProps = { appName, customMetaParser, links, clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const editProps = { appName, customMetaParser, links, clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const indexProps = { clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const pageNotFoundProps = { clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }

    const classNames = []
    if (renderShow) classNames.push('show')
    if (renderEdit) classNames.push('edit')
    if (renderIndex) classNames.push('index')
    if (renderNotFound) classNames.push('not-found')

    return (
      <section id='page' className={classNames.join(' ')}>
        {renderShow && <PageShow {...showProps}/>}
        {renderEdit && <PageEdit {...editProps} />}
        {renderIndex && <PageIndex {...indexProps} />}
        {renderNotFound && <PageNotFound {...pageNotFoundProps} />}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
