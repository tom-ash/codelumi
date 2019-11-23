import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanelVisitor from './components/visitor/visitor'
import AnnouncementIndexPanelUser from './components/user/user'
import './styles/styles.scss'


class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { path } = this.props
    return (
      <div id='announcement-index-panel'>
        {path.indexOf('mojeogloszenia') === -1 && path.indexOf('myannouncements') === -1 ?
        <AnnouncementIndexPanelVisitor />
        :
        <AnnouncementIndexPanelUser />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexPanel)