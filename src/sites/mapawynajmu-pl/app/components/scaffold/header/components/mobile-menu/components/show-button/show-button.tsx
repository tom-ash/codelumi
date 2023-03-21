import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'

export const ShowButton = () => {
  const { dispatch } = useStore()
  const showMobileMenu = () => dispatch({ type: 'control', value: { showMobileMenu: true } })

  return (
    <div
      className='mobile-menu-button'
      onClick={showMobileMenu}
    >
      <div />
      <div />
      <div />
    </div>
  )
}
