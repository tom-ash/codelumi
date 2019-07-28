import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexMini from '../../../../../announcement/components/index/components/mini/mini'
import { checkRoute } from '../../../../../../functions/routers'
import { componentDidMount } from './functions/lifecycle'
import './styles/styles.scss'

class Jumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount
    this.checkRoute = checkRoute.bind(this)
  }

  render() {
    return (
      <div id='jumbotron'>
        <div className='inner'>
          <div
          style={{ backgroundImage: `url('${this.props.jumbotronPicture}')` }}
          className='picture'/>
          {
          this.checkRoute('mainPage') &&
          <AnnouncementIndexMini />
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron)