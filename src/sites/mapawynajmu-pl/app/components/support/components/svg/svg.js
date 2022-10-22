import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'

class SVG extends React.Component {
  render() {
    const { svgs, name, fill } = this.props
    const svgData = svgs[name]

    if (!svgData) return null

    const { viewBox, pathData } = svgData

    return (
      <svg xmlns='http://www.w3.org/2000/svg' fill={fill} viewBox={viewBox}>
        <path d={pathData} />
      </svg>
    )
  }
}

export default connect(mapStateToProps)(SVG)
