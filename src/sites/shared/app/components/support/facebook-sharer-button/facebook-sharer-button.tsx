import React from 'react'
import { SVG } from '../svg/svg'
// import { SubmitButton } from '../submit-button/submit-button';
import { ActionButton } from '../action-button/action-button'

interface FacebookSharerButtonInterface {
  (props: { url: string; isMobile: boolean; facebookSharerButtonLabel: string }): React.ReactElement
}

export const FacebookSharerButton: FacebookSharerButtonInterface = props => {
  const { url, isMobile, facebookSharerButtonLabel } = props
  const action = () => {
    const winWidth = 520
    const winHeight = 350
    const winTop = screen.height / 2 - winHeight / 2
    const winLeft = screen.width / 2 - winWidth / 2

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
      {facebookSharerButtonLabel}
    </>
  )

  const submitButtonProps = {
    className: 'facebook-sharer-button',
    label,
    action,
  }

  return <ActionButton {...submitButtonProps} />
}
