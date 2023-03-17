import React from 'react'
import { PublishedOnInput } from './components/published-on/published-on-input'
import { ModifiedOnInput } from './components/modified-on/modified-on.input'
import { CategoryInput } from './components/category/category.input'
import { SubcategoryInput } from './components/subcategory/subcategory.input'
import { PageLangInput } from './components/page-lang/page-lang.input'
import { LangAltsGroupInput } from './components/lang-alts-group/lang-alts-group.input'
import { TitleInput } from './components/title/title.input'
import { CoverImageInput } from './components/cover-image/cover-image.input'
import { DescriptionTextarea } from './components/description/description.textarea'
import { KeywordsTextarea } from './components/keywords/keywords.textarea'
import { UrlInput } from './components/url/url.input'
import { CanonicalUrlInput } from './components/canonical-url/canonical-url.input'

export const Meta = () => (
  <div className='meta'>
    <UrlInput />
    <CanonicalUrlInput />
    <PublishedOnInput />
    <ModifiedOnInput />
    <CategoryInput />
    <SubcategoryInput />
    <PageLangInput />
    <LangAltsGroupInput />
    <TitleInput />
    <CoverImageInput />
    <DescriptionTextarea />
    <KeywordsTextarea />
  </div>
)
