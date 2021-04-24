import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import PageTile from '../shared/components/tile/tile'
import buildPageEditUrl from '../edit/functions/build-page-edit-url.js'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
  }

  changePage = () => {
    const { clientUrl, name, langVerUrls, lang, changeRoute } = this.props
    const path = buildPageEditUrl({ pageEditData: { name, langVerUrls }, lang })
    const href = `${clientUrl}/${path}`

    changeRoute({ href })
  }

  render() {
    const { name, tileStyles } = this.props
    const tileProps = { ...this.props, renderShow: true, styles: tileStyles, changePage: this.changePage }

    if (!name) return null

    return (
      <div id='page-show'>
        <PageTile { ...tileProps } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageShow)
