import React from 'react'
import { managerAgent } from 'managed-inputs'

export function addAnnouncementManager(action) {
  return managerAgent(action, {
    id: 'header-add-announcement',
    classNames: { container: 'header-button phone-large-hidden' },
    label: (
      <div>
        <div>
          <i className="fas fa-plus"></i>
        </div>
        <div>
          { this.props.language === 'polish' ? 'Dodaj ogłoszenie' : 'Add Announcement' }
        </div>
        <div className='float-clear' />
      </div>),
    onClick: () => {
      this.changeRoute(null, 'addAnnouncement')
    }
  })
}

export function signUpManager(action) {
  return managerAgent(action, {
    id: 'header-sign-up',
    classNames: { container: 'header-button tablet-small-hidden phone-large-hidden' },
    label: (
      <div>
        <div>
          <i className="fas fa-user-plus"></i>
        </div>
        <div>
          { this.props.language === 'polish' ? 'Zarejestruj' : 'Sign Up' }
        </div>
        <div className='float-clear' />
      </div>),
    onClick: () => {
      this.changeRoute(null, 'signUp')
    }
  })
}

export function signInManager(action) {
  return managerAgent(action, {
    id: 'header-sign-in',
    classNames: { container: 'header-button tablet-small-hidden phone-large-hidden' },
    label: (
      <div>
        <div>
          <i className="fas fa-sign-in-alt"></i>
        </div>
        <div>
          { this.props.language === 'polish' ? 'Zaloguj' : 'Sign In' }
        </div>
        <div className='float-clear' />
      </div>),
    onClick: () => {
        this.changeRoute(null, 'signIn')
    }
  })
}

export function myAccountManager(action) {
  return managerAgent(action, {
    id: 'header-my-account',
    classNames: { container: 'header-button tablet-small-hidden phone-large-hidden' },
    label: (
      <div>
        <div>
          <i className="far fa-user-circle"></i>
        </div>
        <div>
          { this.props.language === 'polish' ? 'Moje konto' : 'My account' }
        </div>
        <div className='float-clear' />
      </div>),
    onClick: () => {
      this.changeRoute(null, 'myAccount')
    }
  })
}

export function languageManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button' },
    label: <span><i className='fas fa-globe'/> {this.languageHandler('EN', 'PL')}</span>,
    onClick: () => {
      const language = this.props.language === 'polish' ? 'english' : 'polish'
      this.props.changeLanguage(language)
    }
  })
}