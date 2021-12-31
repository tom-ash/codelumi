import React from 'react'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import { addAnnouncementManager, signUpManager, signInManager, myAccountManager } from './functions/managers.js'
import LangSwtich from './components/lang-switch/lang-switch.js'

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
  const { isMobile } = props

  return (
    <div className='links'>
      {isMobile ?
      <LangSwtich {...props} />
      :
      <>
        <ManagedLink {...addAnnouncementManager(props)}/>
        <HeaderUserLinks {...props} />
        <LangSwtich {...props} />
      </>}
    </div>
  )
}

export default HeaderLinks
