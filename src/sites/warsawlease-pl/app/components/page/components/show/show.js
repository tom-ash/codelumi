import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import { langObjHandler } from '../../../../functions/lang-handler'
import SVG from '../../../support/components/svg/svg'
import AppContext from '../../../../constants/context.js'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler
  }

  static contextType = AppContext

  changePage = () => {
    const { url } = this.props
    const EDIT_PAGE_URL = {
      pl: 'edytuj-strone',
      en: 'edit-page'
    }

    const href = `${CLIENT_URL}/${this.langObjHandler(EDIT_PAGE_URL)}/${url}`

    console.log(href)

    window.history.pushState({}, '', href.replace(/\/\/$/, '/'))
    matchStateToRoute({ pathname: url })
  }

  render() {
    const { name } = this.props
    
    if (!name) return null

    return (
      <>
        <button onClick={this.changePage}>Edit</button>
        <PageTile
          { ...this.props }
        />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageShow))
