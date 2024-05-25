import React, { useState } from 'react'
import { useLinks } from '../../../../../../../shared/app/functions/store/use-links'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'
import { SignOutButton } from './components/sign-out/sign-out'
import { SettingsLink } from '../links/components/settings/settings.link'
import { MyPostings } from './components/my-postings/my-postings'
import { useApp } from '../../../../../../../shared/app/functions/store/use-app'

export const Account = () => {
  const {
    'user/users/show': { label, icon },
  } = useLinks()

  const [isOpen, setIsOpen] = useState(false)

  const classNames = ['account']
  if (isOpen) {
    classNames.push('open')
  }

  return (
    <div className={classNames.join(' ')}>
      <button
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <SVG name={icon} />
        {label}
        <SVG name='chevron' />
      </button>
      {isOpen && (
        <div
          className='menu'
          onMouseDown={e => {
            e.preventDefault()
          }}
        >
          <MyPostings />
          <SettingsLink />
          <SignOutButton />
        </div>
      )}
    </div>
  )
}
