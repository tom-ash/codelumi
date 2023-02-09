import React from 'react'
import PublishedOnInput from './components/published-on-input'
import ModifiedOnInput from './components/modified-on-input'
import CategoryOnInput from './components/category-input'
import SubcategoryInput from './components/subcategory-input'
import PageLangInput from './components/page-lang-input'
import LangAltsGroupInput from './components/lang-alts-group'

interface MetaProps {
  publishedOn: string
  modifiedOn: string
  setInputs(props: object): void
  category: string
  subcategory: string
  pageLang: string
  langAltsGroup: string
}

const Meta = (props: MetaProps) => {
  const { publishedOn, modifiedOn, setInputs, category, subcategory, pageLang, langAltsGroup } = props

  const publishedOnProps = { publishedOn, setInputs }
  const modifiedOnProps = { modifiedOn, setInputs }
  const categoryProps = { category, setInputs }
  const subcategoryProps = { subcategory, setInputs }
  const pageLangProps = { pageLang, setInputs }
  const langAltsGroupProps = { langAltsGroup, setInputs }

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
