import React from 'react'
import PublishedOnInput from './components/published-on-input'
import ModifiedOnInput from './components/modified-on-input'
import CategoryOnInput from './components/category-input'
import SubcategoryInput from './components/subcategory-input'
import LinkDataTextarea from './components/link-data-textarea'

interface MetaProps {
  publishedOn: string,
  modifiedOn: string,
  changeInputs(props: object): void,
  category: string,
  subcategory: string,
  linkData: string
}

const Meta = (props: MetaProps) => {
  const { publishedOn, modifiedOn, changeInputs, category, subcategory, linkData } = props

  const publishedOnProps = { publishedOn, changeInputs }
  const modifiedOnProps = { modifiedOn, changeInputs }
  const categoryProps = { category, changeInputs }
  const subcategoryProps = { subcategory, changeInputs }
  const linkDataProps = { linkData, changeInputs }

  return (
    <div className='meta'>
      <PublishedOnInput {...publishedOnProps} />
      <ModifiedOnInput {...modifiedOnProps} />
      <CategoryOnInput {...categoryProps} />
      <SubcategoryInput {...subcategoryProps} />
      <LinkDataTextarea {...linkDataProps} />
    </div>
  )
}

export default Meta
