import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { Category } from './components/category/category'
import PanelVisitor from './components/visitor/visitor'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { renderMap, currentCategory, links } = this.props

    return (
      <>
        <div id='listing-index-panel'>
          <Category
            currentCategory={currentCategory}
            links={links}
          />
          {renderMap && <PanelVisitor {...{ ...this.props }} />}
          <div className='float-clear' />
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
