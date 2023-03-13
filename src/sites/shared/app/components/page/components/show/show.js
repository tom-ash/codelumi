import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'
import PageTile from '../shared/components/tile/tile'
import { changeUrl } from '../../../../functions/routes/changers/change-url'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
  }

  changePage = () => {
    const { links, buildUrl } = this.props
    const link = links['page/edit']
    const href = link && buildUrl({ path: link.path })

    changeUrl({ href })
  }

  render() {
    const { url, clientUrl, buildUrl } = this.props
    const tileProps = { ...this.props, renderShow: true, clientUrl, changePage: this.changePage, buildUrl }

    if (!url) return null

    return <PageTile {...tileProps} />
  }
}

export default connect(mapStateToProps)(PageShow)
