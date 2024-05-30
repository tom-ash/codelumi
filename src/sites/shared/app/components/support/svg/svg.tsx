import React, { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

interface SVGInterface {
  (props: { name: string; fill?: string; className?: string }): React.ReactElement | null
}

export const SVG: SVGInterface = props => {
  const { store } = useContext(ReactReduxContext)
  const { getState } = store
  const {
    assets: { svgs },
  } = getState()
  const { name, fill, className } = props

  if (!svgs) return null

  const svgData = svgs[name]

  if (!svgData) return null

  const { viewBox, pathData } = svgData

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      style={{
        fill,
      }}
      className={className}
    >
      <path d={pathData} />
    </svg>
  )
}
