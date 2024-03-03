import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'

class Map extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
  }

  render() {
    return (
      <div id='google-map-container'>
        <div id='google-map' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
