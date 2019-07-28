import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changeRoute } from '../../../../functions/routers'
import './styles/styles.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.changeRoute = changeRoute.bind(this)
  }
  render() {
    return(
      <div id='visitor-contact'>
        --- CONTACT ---
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)