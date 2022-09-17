import React from 'react'

const ListingTileDescription = props => {
  const { description } = props
  
  return (
    <div className='description'>
      {description}
    </div>
  )
}

export default ListingTileDescription