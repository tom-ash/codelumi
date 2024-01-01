import React from 'react'
import { PublishedOnInput } from './components/published-on/published-on-input'
import { ModifiedOnInput } from './components/modified-on/modified-on.input'
import { PageLangInput } from './components/page-lang/page-lang.input'
import { LangAltsGroupInput } from './components/lang-alts-group/lang-alts-group.input'
import { TitleInput } from './components/title/title.input'
import { CoverImageInput } from './components/cover-image/cover-image.input'
import { DescriptionTextarea } from './components/description/description.textarea'
import { KeywordsTextarea } from './components/keywords/keywords.textarea'
import { UrlInput } from './components/url/url.input'
import { CanonicalUrlInput } from './components/canonical-url/canonical-url.input'
import { ParentIdInput } from './components/parentId/parentId.input'
import { PriorityInput } from './components/priority/priority.input'

export const Meta = () => (
  <div className='meta'>
    <ParentIdInput />
    <PriorityInput />
    <UrlInput />
    <CanonicalUrlInput />
    <PublishedOnInput />
    <ModifiedOnInput />
    <PageLangInput />
    <LangAltsGroupInput />
    <TitleInput />
    <CoverImageInput />
    <DescriptionTextarea />
    <KeywordsTextarea />
  </div>
)
