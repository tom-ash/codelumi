import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PanelCategories from './components/categories/categories'
import PanelVisitor from './components/visitor/visitor'
import AppContext from '../../../../../../constants/context.js'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext
  
  render() {
    const {
      lang,
      renderMap,
      currentCategory,
      changeInputs,
      changeControl,
      categoryAmounts,
      apartmentsAmount,
      housesAmount,
      roomsAmount,
      parkingSpacesAmount,
      usablePremisesAmount,
      officesAmount,
      virtualOfficesAmount,
      coworkingAmount,
      links
    } = this.props
    const { changeRoute } = this.context

    return (
      <>
        <div id='announcement-index-panel'>
          <PanelCategories
            langHandler={this.langHandler}
            changeInputs={changeInputs}
            changeControl={changeControl}
            currentCategory={currentCategory}
            changeRoute={changeRoute}
            lang={lang}
            categoryAmounts={categoryAmounts}
            apartmentsAmount={apartmentsAmount}
            housesAmount={housesAmount}
            roomsAmount={roomsAmount}
            parkingSpacesAmount={parkingSpacesAmount}
            usablePremisesAmount={usablePremisesAmount}
            officesAmount={officesAmount}
            virtualOfficesAmount={virtualOfficesAmount}
            coworkingAmount={coworkingAmount}
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
