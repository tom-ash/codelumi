import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexMap from './components/map/map'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import { parseCurrency } from '../../functions/currency-parsers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { componentDidUpdate } from './functions/lifecycle'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.parseCurrency = parseCurrency.bind(this)
    this.componentDidUpdate = componentDidUpdate
  }

  render() {
    const { renderMap, renderMy } = this.props

    return (
      <section id='listing-index'>
        {renderMap && (
          <>
            <AnnouncementIndexPanel />
            <AnnouncementIndexMap />
          </>
        )}

        {renderMy && <AnnouncementIndexMy />}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))
