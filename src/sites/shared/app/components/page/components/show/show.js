import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import buildPageEditUrl from '../edit/functions/build-page-edit-url.js'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
  }

  changePage = () => {
    const { name, lang_ver_urls: langVerUrls, lang, changeUrl } = this.props
    const path = buildPageEditUrl({ pageEditData: { name, langVerUrls }, lang })
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
