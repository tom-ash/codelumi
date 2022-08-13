import React from 'react'

const Content = (props: ContentProps) => {
  const {
    priceMin,
    priceMax
  } = props

  if (priceMin && priceMax) {
    return <>{priceMin} - {priceMax} PLN</>
  }

  if (priceMin) {
    return <>&gt; {priceMin} PLN</>
  }

  if (priceMax) {
    return <>&lt; {priceMax} PLN</>
  }

  return <>Cena / MC</>
}

export default Content
