import React from 'react'
import { SVG } from '../svg/svg'
// import { SubmitButton } from '../submit-button/submit-button';
import { ActionButton } from '../action-button/action-button'

interface FacebookSharerButtonInterface {
  (props: { href: string; isMobile: boolean; shareOnFacebookButtonLabel: string }): React.ReactElement
}

export const FacebookSharerButton: FacebookSharerButtonInterface = props => {
  const { href, isMobile, shareOnFacebookButtonLabel } = props
  const action = () => {
    const winWidth = 520
    const winHeight = 350
    const winTop = screen.height / 2 - winHeight / 2
    const winLeft = screen.width / 2 - winWidth / 2
    const url = `${window.location.origin}${href}`

    if (isMobile) return window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)

    window.open(
      'http://www.facebook.com/sharer.php?' + '&u=' + url,
      'sharer',
      'top=' + winTop + ',left=' + winLeft + ',width=' + winWidth + ',height=' + winHeight
    )
  }

  const label = (
    <>
      <SVG name='facebook' />
      {shareOnFacebookButtonLabel}
    </>
  )

  const submitButtonProps = {
    className: 'facebook-sharer-button',
    label,
    action,
  }

  return <ActionButton {...submitButtonProps} />
}
