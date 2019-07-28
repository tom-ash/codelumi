import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changeRoute } from '../../../../functions/routers'
import './styles/styles.scss'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.changeRoute = changeRoute.bind(this)
  }
  render() {
    return(
      <div id='visitor-about'>
        --- O SERWISIE ---
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)