import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='blog'>
        BLOG
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
