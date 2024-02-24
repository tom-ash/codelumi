import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { MiniList } from '../mini-list/mini-list'
import loadable from '@loadable/component'

const ListingsShow = loadable(() => import('../../../show/show'))

class AnnouncementIndexMap extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
  }

  render() {
    const {
      // @ts-ignore
      isSSR,
      // @ts-ignore
      renderShow,
    } = this.props

    return (
      <div id='listings-index-results'>
        <main>
          {!(renderShow && isSSR) && <MiniList />}
          {renderShow && <ListingsShow />}
        </main>
        <div id='google-map-container'>
          <div id='google-map' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMap))
