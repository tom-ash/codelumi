import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import { langObjHandler } from '../../../../functions/lang-handler'
import SVG from '../../../support/components/svg/svg'
import AppContext from '../../../../constants/context.js'
import buildPageEditUrl from '../../../../../shared/functions/builders/page/edit-url'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler
  }

  static contextType = AppContext

  changePage = () => {
    const { changeUrl } = this.context
    const { name, lang_ver_urls: langVerUrls, lang } = this.props
    const path = buildPageEditUrl({ pageCreateData: { name, langVerUrls }, lang })
    const href = `${CLIENT_URL}/${path}`

    changeUrl({ href })
  }

  render() {
    const { name, isAdmin } = this.props
    
    if (!name) return null

    return (
      <div id='page-show'>
        {isAdmin && <button onClick={this.changePage}>Edit</button>}
        <PageTile
          { ...this.props }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageShow))
