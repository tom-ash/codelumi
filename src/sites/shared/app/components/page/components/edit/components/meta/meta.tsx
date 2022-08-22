import React from 'react'
import PublishedOnInput from './components/published-on-input'
import ModifiedOnInput from './components/modified-on-input'
import CategoryOnInput from './components/category-input'
import SubcategoryInput from './components/subcategory-input'
import PageLangInput from './components/page-lang-input'
import LangAltsGroupInput from './components/lang-alts-group'

interface MetaProps {
  publishedOn: string,
  modifiedOn: string,
  changeInputs(props: object): void,
  category: string,
  subcategory: string,
  pageLang: string,
  langAltsGroup: string
}

const Meta = (props: MetaProps) => {
  const {
    publishedOn,
    modifiedOn,
    changeInputs,
    category,
    subcategory,
    pageLang,
    langAltsGroup
  } = props

  const publishedOnProps = { publishedOn, changeInputs }
  const modifiedOnProps = { modifiedOn, changeInputs }
  const categoryProps = { category, changeInputs }
  const subcategoryProps = { subcategory, changeInputs }
  const pageLangProps = { pageLang, changeInputs }
  const langAltsGroupProps = { langAltsGroup, changeInputs }

  return (
    <div className='meta'>
      <PublishedOnInput {...publishedOnProps} />
      <ModifiedOnInput {...modifiedOnProps} />
      <CategoryOnInput {...categoryProps} />
      <SubcategoryInput {...subcategoryProps} />
      <PageLangInput {...pageLangProps} />
      <LangAltsGroupInput {...langAltsGroupProps} />
    </div>
  )
}

export default Meta
