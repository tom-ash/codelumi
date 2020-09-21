import React from 'react'
import loadable from '@loadable/component'
const AnnouncementIndexPanelVisitor = loadable(() => import('./components/visitor/visitor'))
const AnnouncementIndexPanelUser = loadable(() => import('./components/user/user'))
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    const {
      showMap,
      showList,
      showCatalogue
    } = this.props

    return (
      <div id='announcement-index-panel'>
        {(showMap || showCatalogue) && <AnnouncementIndexPanelVisitor />}
        {showList && <AnnouncementIndexPanelUser />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
