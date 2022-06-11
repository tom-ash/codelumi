import React from 'react'
import PublishedOnInput from './components/published-on-input'
import ModifiedOnInput from './components/modified-on-input'
import CategoryOnInput from './components/category-input'
import SubcategoryInput from './components/subcategory-input'
import LinkDataTextarea from './components/link-data-textarea'
import PageLangInput from './components/page-lang-input'

interface MetaProps {
  publishedOn: string,
  modifiedOn: string,
  changeInputs(props: object): void,
  category: string,
  subcategory: string,
  linkData: string,
  pageLang: string
}

const Meta = (props: MetaProps) => {
  
  const { publishedOn, modifiedOn, changeInputs, category, subcategory, linkData, pageLang } = props

  console.log(pageLang)

  const publishedOnProps = { publishedOn, changeInputs }
  const modifiedOnProps = { modifiedOn, changeInputs }
  const categoryProps = { category, changeInputs }
  const subcategoryProps = { subcategory, changeInputs }
  const linkDataProps = { linkData, changeInputs }
  const pageLangProps = { pageLang, changeInputs }

  return (
    <div className='meta'>
      <PublishedOnInput {...publishedOnProps} />
      <ModifiedOnInput {...modifiedOnProps} />
      <CategoryOnInput {...categoryProps} />
      <SubcategoryInput {...subcategoryProps} />
      <LinkDataTextarea {...linkDataProps} />
      <PageLangInput {...pageLangProps} />
    </div>
  )
}

export default Meta
