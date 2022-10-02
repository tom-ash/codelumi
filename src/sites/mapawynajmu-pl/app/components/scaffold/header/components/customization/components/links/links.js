import React from 'react'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import { addAnnouncementManager, signUpManager, signInManager, myAccountManager } from './functions/managers.js'
import LangSwtich from './components/lang-switch/lang-switch'
import ArticlesLink from './components/articles-link'

const HeaderUserLinks = props => {
  const { authorized } = props

  return (
    <>  
      {authorized ?
      <ManagedButton {...myAccountManager(props)}/>
      :
      <>
        <ManagedLink {...signUpManager(props)}/>
        <ManagedLink {...signInManager(props)}/>
      </>}
    </>
  )
}

const HeaderLinks = props => {
  const {
    isMobile,
    buildUrl,
    changeRoute,
    langHandler,
    langs
  } = props
  const articlesLinkProps = {
    buildUrl,
    changeRoute,
    langHandler,
    langs
  }

  return (
    <div className='links'>
      {isMobile ?
      <LangSwtich {...props} />
      :
      <>
        <ManagedLink {...addAnnouncementManager(props)}/>
        <HeaderUserLinks {...props} />
        <ArticlesLink {...articlesLinkProps} />
        <LangSwtich {...props} />
      </>}
    </div>
  )
}

export default HeaderLinks
