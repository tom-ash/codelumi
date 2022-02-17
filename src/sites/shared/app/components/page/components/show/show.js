import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import PageTile from '../shared/components/tile/tile'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
  }

  changePage = () => {
    const { links, changeRoute, buildUrl } = this.props
    const link = links['page/edit']
    const href = link && buildUrl({ path: link.path })

    changeRoute({ href })
  }

  render() {
    const { name, clientUrl, changeRoute, buildUrl } = this.props
    const tileProps = { ...this.props, renderShow: true, clientUrl, changeRoute, changePage: this.changePage, buildUrl }

    if (!name) return null

    return (
      <PageTile { ...tileProps } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageShow)
