import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexMap from './components/map/map'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import langHandler from '../../../../functions/lang-handler'
import { parseCurrency } from '../../functions/currency-parsers'
import { parseCategoryForUrl } from '../../functions/category-parsers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { componentDidUpdate } from './functions/lifecycle.js'

import AppContext from '../../../../constants/context.js'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.componentDidUpdate = componentDidUpdate
  }

  static contextType = AppContext

  render() {
    const { renderMap, renderMy } = this.props

    return (
      <div id='announcement-index'>
        {renderMap && <AnnouncementIndexPanel />}
        {renderMap && <AnnouncementIndexMap />}
        {renderMy && <AnnouncementIndexMy />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))
