import React from 'react'

const Content = (props: ContentProps) => {
  const {
    min,
    max
  } = props

  if (min && max) {
    return <>{min} - {max} PLN</>
  }

  if (min) {
    return <>&gt; {min} PLN</>
  }

  if (max) {
    return <>&lt; {max} PLN</>
  }

  return <>Cena / MC</>
}

export default Content
