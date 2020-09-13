import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanelVisitor from './components/visitor/visitor'
import AnnouncementIndexPanelUser from './components/user/user'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    const { path, showMap, showList } = this.props

    return (
      <div id='announcement-index-panel'>
        {showMap && <AnnouncementIndexPanelVisitor />}
        {showList    && <AnnouncementIndexPanelUser />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
