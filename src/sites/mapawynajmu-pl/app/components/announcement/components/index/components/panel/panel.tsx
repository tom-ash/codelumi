import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { Category } from './components/category/category'
import PanelVisitor from './components/visitor/visitor'

class AnnouncementIndexPanel extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    // @ts-ignore
    const { renderMap } = this.props

    return (
      <>
        <div id='listing-index-panel'>
          <Category />
          {renderMap && <PanelVisitor {...{ ...this.props }} />}
          <div className='float-clear' />
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
