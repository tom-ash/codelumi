import React from 'react'
import { SettingsLink } from '../links/components/settings/settings.link'
import { MyPostings } from '../account/components/my-postings/my-postings'
import { SignOutButton } from '../account/components/sign-out/sign-out'
import { AddPostingLink } from '../links/components/add-posting/add-posting.link'
import { SignUpLink } from '../links/components/sign-up/sign-up.link'
import { SignInLink } from '../links/components/sign-in/sign-in.link'
import { useDispatch } from 'react-redux'
import { useControl } from '../../../../../../../shared/app/functions/store/use-control'
import { useUser } from '../../../../../../../shared/app/functions/store/use-user'

export const SideMenu = () => {
  const { authorized } = useUser()
  const { isSideMenuOpen: isOpen } = useControl()
  const classNames = ['side-menu-button']
  const menuClassNames = ['side-menu-panel']
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })

  if (isOpen) {
    classNames.push('open')
    menuClassNames.push('open')
  }

  return (
    <>
      {/* Create component: SideMenuButton */}
      <div className={classNames.join(' ')}>
        <button onClick={() => setControl({ isSideMenuOpen: !isOpen })}>
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
        </button>
        {isOpen && (
          <div
            className='cover'
            onClick={() => setControl({ isSideMenuOpen: false })}
          />
        )}
      </div>
      {/* Create component: SideMenuPanel */}
      <div
        className={menuClassNames.join(' ')}
        onMouseDown={e => {
          e.preventDefault()
        }}
      >
        <AddPostingLink />
        {!authorized && (
          <>
            <SignUpLink />
            <SignInLink />
          </>
        )}
        {authorized && (
          <>
            <MyPostings />
            <SettingsLink />
            <SignOutButton />
          </>
        )}
      </div>
    </>
  )
}
