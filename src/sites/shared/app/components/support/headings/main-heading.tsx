import React from 'react'
import { useTexts } from '../../../functions/store/use-texts'
import { SVG } from '../svg/svg'

interface MainHeadingInterface {
  (props: { icon?: string }): React.ReactElement
}

export const MainHeading: MainHeadingInterface = props => {
  const { icon } = props
  const { heading } = useTexts()

  if (icon) {
    return (
      <div className='main-heading'>
        <SVG name={icon} />
        <h1>{heading}</h1>
      </div>
    )
  }

  return <h1>{heading}</h1>
}
