import React from 'react'
// import loadable from '@loadable/component'
// import { connect } from 'react-redux'
// import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
// import { languageObjectHandler } from '../../../../../../functions/language-handler'
// import withStyles from 'isomorphic-style-loader/withStyles'
// import styles from './styles/styles.scss'
// import AnnouncementIndexPanelCategories from './components/categories/categories'
import { ManagedLink } from 'managed-inputs'

export default ({
  buttonManager
}) => {
    // console.log(this)
  return (
    //   console.log(this)
    <>
      <ManagedLink {...buttonManager()} />
    </>
  )

return null

    // return (
    //   <div id='announcement-index-panel'>
    //     <AnnouncementIndexPanelCategories
    //       languageObjectHandler={this.languageObjectHandler}
    //       scalableVectorGraphics={scalableVectorGraphics}
    //       changeInputs={changeInputs}
    //       changeControl={changeControl}
    //       currentCategory={currentCategory}
    //     />
    //     {(renderMap || renderCatalogue) &&
    //     <>
    //       BUTTON
    //     </>
    //     }
    //   </div>
    // )


}
