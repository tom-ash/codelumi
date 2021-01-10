import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorLegalProvision extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    return (
      <div className={`provision ${this.props.data.tier}`}>
        <div className='indent' />
        <div className='mark'>
          {this.props.data.item}
        </div>
        <div className='text'>
          {this.langHandler(this.props.data.pl, this.props.data.en)}
        </div>
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorLegalProvision))
