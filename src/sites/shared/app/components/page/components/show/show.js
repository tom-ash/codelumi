import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import PageTile from '../shared/components/tile/tile'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
  }

  changePage = () => {
    const { links, changeRoute } = this.props
    const href = links['page/edit']

    changeRoute({ href })
  }

  render() {
    const { name, clientUrl, changeRoute } = this.props
    const tileProps = { ...this.props, renderShow: true, clientUrl, changeRoute, changePage: this.changePage }

    if (!name) return null

    return (
      <div id='page-show'>
        <PageTile { ...tileProps } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageShow)
