import React from 'react'
import { useData } from '../../../functions/store/use-data'
import Image from '../image/image'

interface AuthorInterface {
  (): React.ReactElement
}

export const Author: AuthorInterface = () => {
  const { author: {
    firstName,
    lastName,
    // url, // TODO!
    pictureUrl,
  }} = useData()

  const name = `${firstName} ${lastName}`

  return (
    <div className='author'>
      <Image src={pictureUrl} alt={name} />
      <strong>{name}</strong>
    </div>
  )
}

export default Author
