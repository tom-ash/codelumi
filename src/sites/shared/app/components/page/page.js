import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const PageCreate = loadable(() => import('./components/create/create'))
const PageEdit = loadable(() => import('./components/edit/edit'))
const PageShow = loadable(() => import('./components/show/show'))
const PageIndex = loadable(() => import('./components/index/index'))
const PageNotFound = loadable(() => import('./components/not-found/not-found'))
import withStyles from 'isomorphic-style-loader/withStyles'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { appName, customNodeParser, customMetaParser, links, clientUrl, apiUrl, renderCreate, renderEdit, renderShow, renderIndex, renderNotFound, device, changeRoute, buildUrl, langHandler } = this.props
    const createProps = { clientUrl, apiUrl, changeRoute, buildUrl, langHandler }
    const showProps = { appName, customNodeParser, customMetaParser, links, clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const editProps = { appName, customNodeParser, customMetaParser, links, clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const indexProps = { clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }
    const notFoundProps = { clientUrl, apiUrl, device, changeRoute, buildUrl, langHandler }


    const classNames = []
    if (renderCreate) classNames.push('create')
    if (renderShow) classNames.push('show')
    if (renderEdit) classNames.push('edit')
    if (renderIndex) classNames.push('index')
    if (renderNotFound) classNames.push('not-found')

    return (
      <section id='page' className={classNames.join(' ')}>
        {renderCreate && <PageCreate {...createProps} />}
        {renderShow && <PageShow {...showProps}/>}
        {renderEdit && <PageEdit {...editProps} />}
        {renderIndex && <PageIndex {...indexProps} />}
        {renderNotFound && <PageNotFound {...notFoundProps} />}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
