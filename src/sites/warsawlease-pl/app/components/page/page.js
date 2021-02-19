import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const PageCreate = loadable(() => import('./components/edit/edit'))
const PageShow = loadable(() => import('./components/show/show'))
const PageNotFound = loadable(() => import('./components/not-found/not-found'))
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      renderCreate,
      renderEdit,
      renderShow,
      renderNotFound
    } = this.props

    return (
      <div id='post'>
        {renderShow && <PageShow />}
        {renderEdit && <PageCreate />}
        {renderNotFound && <PageNotFound />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page))
