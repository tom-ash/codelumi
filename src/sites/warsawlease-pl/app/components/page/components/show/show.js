import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import { langObjHandler } from '../../../../functions/lang-handler'
import SVG from '../../../support/components/svg/svg'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler
  }

  render() {
    const { name } = this.props
    
    if (!name) return null

    return (
      <PageTile
        { ...this.props }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageShow))
