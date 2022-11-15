import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { Category } from './components/category/category'
import PanelVisitor from './components/visitor/visitor'
import AppContext from '../../../../../../constants/context'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      renderMap,
      currentCategory,
      links,
    } = this.props
    const { changeRoute } = this.context

    return (
      <>
        <div id='listing-index-panel'>
          <Category
            langHandler={this.langHandler}
            currentCategory={currentCategory}
            changeRoute={changeRoute}
            links={links}
          />
          {renderMap && <PanelVisitor {...{ ...this.props, changeRoute, langHandler: this.langHandler }} />}
          <div className='float-clear' />
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
