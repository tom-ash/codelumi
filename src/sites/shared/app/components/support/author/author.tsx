import React from 'react'
import { useData } from '../../../functions/store/use-data'
import { SVG } from '../svg/svg'

interface AuthorInterface {
  (): React.ReactElement
}

export const Author: AuthorInterface = () => {
  const {
    author: {
      firstName,
      lastName,
      // url, // TODO!
      pictureUrl,
    },
  } = useData()

  const name = `${firstName} ${lastName}`

  return (
    <div className='author'>
      <SVG name='pen' />
      {name}
    </div>
  )
}

export default Author
