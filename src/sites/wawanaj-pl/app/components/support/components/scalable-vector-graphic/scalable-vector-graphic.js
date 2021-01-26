import React from 'react'

const ScalableVectorGraphic = ({ pathData, fill }) => {
  if (!pathData) return null
  const defaultColor = '#000000'

  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d={pathData}
      />
    </svg>
  )
}

export default ScalableVectorGraphic
