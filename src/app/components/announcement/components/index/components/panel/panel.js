import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PanelCategories from './components/categories/categories'
import PanelVisitor from './components/visitor/visitor'
import { buttonManager } from './components/visitor/managers/managers'
import { changeRoute } from '../../../../../../functions/routers/change-route'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.languageHandler = languageObjectHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    const {
      language,
      renderMap,
      renderCatalogue,
      renderMy,
      currentCategory,
      scalableVectorGraphics,
      changeInputs,
      changeControl
    } = this.props

    return (
      <div id='announcement-index-panel'>
        <PanelCategories
          languageObjectHandler={this.languageObjectHandler}
          scalableVectorGraphics={scalableVectorGraphics}
          changeInputs={changeInputs}
          changeControl={changeControl}
          currentCategory={currentCategory}
        />
        {(renderMap || renderCatalogue) &&
        <>
          <PanelVisitor
            abc='asdad'
            changeRoute={this.changeRoute}
            language={language}
            languageHandler={this.languageObjectHandler}
            buttonManager={this.buttonManager}
            // renderMap={renderMap}
            // changeRoute={this.changeRoute}
          />
        </>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
