import React from 'react'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import { addAnnouncementManager, signUpManager, signInManager, myAccountManager } from './functions/managers'
import { LangSwitch } from '../../../../../../../../../shared/app/components/support/lang-switch/lang-switch'
import ArticlesLink from './components/articles-link'

const HeaderUserLinks = props => {
  const { authorized } = props

  return (
    <>
      {authorized ? (
        <ManagedButton {...myAccountManager(props)} />
      ) : (
        <>
          <ManagedLink {...signUpManager(props)} />
          <ManagedLink {...signInManager(props)} />
        </>
      )}
    </>
  )
}

const HeaderLinks = props => {
  const { isMobile, buildUrl, langHandler, langs } = props
  const articlesLinkProps = {
    buildUrl,
    langHandler,
    langs,
  }

  return (
    <div className='links'>
      {isMobile ? (
        <LangSwitch {...props} />
      ) : (
        <>
          <ManagedLink {...addAnnouncementManager(props)} />
          <HeaderUserLinks {...props} />
          <ArticlesLink {...articlesLinkProps} />
          <LangSwitch {...props} />
        </>
      )}
    </div>
  )
}

export default HeaderLinks
