import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanelVisitor from './components/visitor/visitor'
import AnnouncementIndexPanelUser from './components/user/user'
import { languageObjectHandler } from '../../../../../../functions/language-handler'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    const { path, showVisitor, showUser } = this.props

    return (
      <div id='announcement-index-panel'>
        {showVisitor && <AnnouncementIndexPanelVisitor />}
        {showUser    && <AnnouncementIndexPanelUser />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexPanel)