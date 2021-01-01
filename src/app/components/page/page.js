import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const PageCreate = loadable(() => import('./components/create/create'))
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
      renderShow,
      renderNotFound
    } = this.props

    console.log(renderCreate)

    return (
      <div id='post'>
        {renderShow && <PageShow />}
        {renderCreate && <PageCreate />}
        {renderNotFound && <PageNotFound />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page))
