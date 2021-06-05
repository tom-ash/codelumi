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
import styles from './styles/styles.scss'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { appName, customNodeParser, customMetaParser, clientUrl, apiUrl, renderCreate, renderEdit, renderShow, renderIndex, renderNotFound, changeRoute, langHandler } = this.props
    const createProps = { clientUrl, apiUrl, changeRoute, langHandler }
    const showProps = { appName, customNodeParser, customMetaParser, clientUrl, apiUrl, changeRoute, langHandler }
    const editProps = { appName, customNodeParser, customMetaParser, clientUrl, apiUrl, changeRoute, langHandler }
    const indexProps = { clientUrl, apiUrl, changeRoute, langHandler }
    const notFoundProps = { clientUrl, apiUrl, changeRoute, langHandler }

    return (
      <div id='post'>
        {renderCreate && <PageCreate {...createProps} />}
        {renderShow && <PageShow {...showProps}/>}
        {renderEdit && <PageEdit {...editProps} />}
        {renderIndex && <PageIndex {...indexProps} />}
        {renderNotFound && <PageNotFound {...notFoundProps} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page))
