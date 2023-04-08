import React, { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

interface SVGInterface {
  (props: { name: string; fill?: string }): React.ReactElement | null
}

export const SVG: SVGInterface = props => {
  const { store } = useContext(ReactReduxContext)
  const { getState, dispatch } = store
  const {
    assets: { svgs },
  } = getState()
  const { name, fill } = props

  if (!svgs) return null

  const svgData = svgs[name]

  if (!svgData) return null

  const { viewBox, pathData } = svgData

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      viewBox={viewBox}
    >
      <path d={pathData} />
    </svg>
  )
}
