import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const PageCreate = loadable(() => import('./components/create/create'))
const PageEdit = loadable(() => import('./components/edit/edit'))
const PageShow = loadable(() => import('./components/show/show'))
const PageNotFound = loadable(() => import('./components/not-found/not-found'))
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { renderCreate, renderEdit, renderShow, renderNotFound, changeUrl, langObjHandler } = this.props

    const createProps = { changeUrl, langObjHandler }
    const showProps = { changeUrl, langObjHandler }
    const editProps = { changeUrl, langObjHandler }
    const notFoundProps = { changeUrl, langObjHandler }

    return (
      <div id='post'>
        {renderCreate && <PageCreate {...createProps} />}
        {renderShow && <PageShow {...showProps}/>}
        {renderEdit && <PageEdit {...editProps} />}
        {renderNotFound && <PageNotFound {...notFoundProps} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page))
