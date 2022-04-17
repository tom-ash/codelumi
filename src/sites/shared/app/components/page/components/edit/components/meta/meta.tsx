import React from 'react'
import PublishedOnInput from './components/published-on-input'
import ModifiedOnInput from './components/modified-on-input'

interface MetaProps {
  publishedOn: string,
  modifiedOn: string,
  changeInputs(props: object): void
}

const Meta = (props: MetaProps) => {
  const { publishedOn, modifiedOn, changeInputs } = props

  const publishedOnProps = { publishedOn, changeInputs }
  const modifiedOnProps = { modifiedOn, changeInputs }

  return (
    <div className='meta'>
      <PublishedOnInput {...publishedOnProps} />
      <ModifiedOnInput {...modifiedOnProps} />
    </div>
  )
}

export default Meta
