import React from 'react'

const SVG = ({ pathData, fill, viewBox }) => {
  if (!pathData) return null

  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || "0 0 512 512"}
    >
      <path
        d={pathData}
      />
    </svg>
  )
}

export default SVG
