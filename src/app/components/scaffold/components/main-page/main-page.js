import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Jumbotron from './components/jumbotron/jumbotron'
import AnnouncementIndexMap from '../../../announcement/components/index/components/map/map'
import './styles/styles.scss'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='main-page'>
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
