import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data';

interface DescriptionInterface {
  (props: {}): React.ReactElement;
}

export const Description: DescriptionInterface = () => {
  const {
    posting: {
      description
    }
  } = useData()

  return (
    <div
      className='description'
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}
