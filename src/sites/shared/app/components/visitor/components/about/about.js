import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { langHandler } = this.props

    return(
      <div id='visitor-about'>
        VISITOR ABOUT
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(About))
