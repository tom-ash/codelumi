import React from 'react'

const Content = (props: ContentProps) => {
  const {
    label,
    min,
    max,
    unit
  } = props

  if (min && max) {
    return <>{min} - {max} {unit}</>
  }

  if (min) {
    return <>&gt; {min} {unit}</>
  }

  if (max) {
    return <>&lt; {max} {unit}</>
  }

  return <>{label}</>
}

export default Content
