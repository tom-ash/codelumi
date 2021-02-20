import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'

class PageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div id='page-index'>
        PAGE INDEX
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex)
