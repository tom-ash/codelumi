import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexMap from './components/map/map'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import { langHandler } from '../../../../functions/lang-handler'
import { parseCurrency } from '../../functions/currency-parsers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { componentDidUpdate } from './functions/lifecycle'

import AppContext from '../../../../constants/context'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.componentDidUpdate = componentDidUpdate
  }

  static contextType = AppContext

  render() {
    const { renderMap, renderMy, title } = this.props

    return (
      <section id='listing-index'>
        {renderMap && (
          <section id='listing-index' className='visitor'>
            <AnnouncementIndexPanel />
            <AnnouncementIndexMap />
          </section>
        )}

        <section id='listing-index' className='user'>
          {renderMy && <AnnouncementIndexMy />}
        </section>
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))
