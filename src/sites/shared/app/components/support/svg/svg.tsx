import React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '../../../functions/root-reducer/root-reducer'

interface SVGInterface {
  (props: { name: string; fill?: string; className?: string }): React.ReactElement | null
}

export const SVG: SVGInterface = props => {
  const assets = useSelector((state: Store) => state.assets)

  if (!assets) {
    return null
  }

  const { svgs } = assets

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
