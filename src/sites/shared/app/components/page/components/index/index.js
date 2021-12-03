import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const Manage = loadable(() => import('./components/manage/manage.js'))

class PageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { renderManage } = this.props

    return (
      <>
        {renderManage && <Manage {...this.props}/>}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex)
