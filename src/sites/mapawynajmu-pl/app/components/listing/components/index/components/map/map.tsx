import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import ListingShowTile from '../../../show/components/tile/tile'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import GoBack from '../../../show/components/tile/components/go-back'
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
      render,
    } = this.props

    const {
      'listings/show': renderShow
    } = render

    return (
      <div id='listing-index-map'>
        <div id='google-map-container'>
          <MiniList />
          <div id='google-map' />
          {renderShow && <ListingsShow />}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMap))
